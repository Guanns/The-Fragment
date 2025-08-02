import {
    rewindHistory,
    state
} from './state.js';
import {
    rewindList,
    journalHistory
} from './ui-elements.js';

export function updateJournalUI() {
    journalHistory.innerHTML = '';
    if (state.journal.length === 0) {
        journalHistory.innerHTML = '<li>Belum ada keputusan yang tercatat.</li>';
    } else {
        [...state.journal].reverse().forEach(entry => {
            const li = document.createElement('li');
            li.className = 'border-b border-gray-800 pb-2';
            li.textContent = `• ${entry}`;
            journalHistory.appendChild(li);
        });
    }
}

export function setupRewindButton(rewindButton) {
    rewindButton.addEventListener("click", () => {
        if (rewindHistory.length > 0) {
            rewindList.innerHTML = [...rewindHistory].reverse().map(e => `<li>• ${e}</li>`).join("");
        } else {
            rewindList.innerHTML = '<li>Belum ada pilihan yang dibuat.</li>';
        }
        rewindList.classList.toggle("hidden");
    });
}