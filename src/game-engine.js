import {
    textNodes
} from './text-nodes.js';
import {
    state,
    rewindHistory, // <-- FIX: Impor rewindHistory
    updateAllUI,
    gainExp,
    updateMapLabel,
    items
} from './state.js';
import {
    textElement,
    optionButtonsElement,
    quoteBox
} from './ui-elements.js';

const activeTypewriterIntervals = new Map();

export function startGame() {
    state.completedNodes.push(1); // Node awal dianggap sudah "selesai"
    updateAllUI();
    showTextNode(1);
}

function showTextNode(id) {
    const textNode = textNodes.find(node => node.id === id);
    if (!textNode) return;

    textElement.innerHTML = '';
    optionButtonsElement.innerHTML = '';

    if (textNode.mapLabel) {
        updateMapLabel(textNode.mapLabel);
    }

    if (textNode.quote) {
        quoteBox.classList.remove('hidden');
        typewriter(quoteBox, textNode.quote);
    } else {
        quoteBox.classList.add('hidden');
    }

    const narrativeText = textNode.text.replace('${playerName}', state.playerName);
    typewriter(textElement, narrativeText, () => {
        textNode.options.forEach(option => {
            if (showOption(option)) {
                const button = document.createElement('button');
                button.innerText = option.text;
                button.className = 'w-full text-left p-4 rounded-lg transition-colors duration-300 border';

                if (option.karma === 'good') {
                    button.classList.add('border-sky-500', 'hover:bg-sky-900');
                } else if (option.karma === 'bad') {
                    button.classList.add('border-red-500', 'hover:bg-red-900');
                } else {
                    button.classList.add('border-gray-600', 'hover:bg-gray-800');
                }

                button.addEventListener('click', () => selectOption(option, textNode.id)); // <-- FIX: Kirim id node saat ini
                optionButtonsElement.appendChild(button);
            }
        });
    });
}

function showOption(option) {
    if (!option.requiredState) return true;
    return Object.entries(option.requiredState).every(([stat, value]) => {
        return state.stats[stat] >= value;
    });
}

function selectOption(option, currentNodeId) {
    const nextNodeId = option.nextText;
    
    // FIX: Simpan riwayat pilihan
    rewindHistory.push(option.text);

    // FIX: Cek apakah node ini sudah pernah memberikan hadiah
    if (!state.completedNodes.includes(currentNodeId)) {
        if (option.statChanges) {
            for (const stat in option.statChanges) {
                const change = option.statChanges[stat];
                state.stats[stat] = Math.max(0, Math.min(10, state.stats[stat] + change));
                showStatNotification(stat, change);
            }
        }

        if (option.expGain) {
            gainExp(option.expGain);
        }

        if (option.itemGain) {
            const {
                itemId,
                quantity
            } = option.itemGain;
            if (items[itemId]) { // Pastikan item ada di database
                state.inventory[itemId] = (state.inventory[itemId] || 0) + quantity;
            }
        }
        
        // Tandai node ini sebagai selesai
        state.completedNodes.push(currentNodeId);
    }


    if (option.journalEntry) {
        // Hindari duplikasi jurnal jika kembali
        if (!state.journal.includes(option.journalEntry)) {
            state.journal.push(option.journalEntry);
        }
    }

    updateAllUI();

    if (nextNodeId) {
        showTextNode(nextNodeId);
    }
}


function showStatNotification(stat, change) {
    const container = document.body;
    const notif = document.createElement('div');
    notif.className = 'stat-notification';
    notif.textContent = `${stat.charAt(0).toUpperCase() + stat.slice(1)} ${change > 0 ? '+' : ''}${change}`;
    container.appendChild(notif);

    setTimeout(() => {
        notif.classList.add('show');
        setTimeout(() => {
            notif.classList.remove('show');
            setTimeout(() => notif.remove(), 300);
        }, 1500);
    }, 10);
}

function typewriter(element, text, callback) {
    if (activeTypewriterIntervals.has(element)) {
        clearInterval(activeTypewriterIntervals.get(element));
    }

    let i = 0;
    element.innerHTML = '';
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            activeTypewriterIntervals.delete(element);
            if (callback) callback();
        }
    }, 25);
    activeTypewriterIntervals.set(element, interval);
}