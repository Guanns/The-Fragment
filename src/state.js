import {
  moodText,
  playerNameElement,
  statsContainer,
  statsModalPlayerName,
  statsModalContainer,
  profileName,
  levelBar,
  playerLevelText,
  mapPath,
  desktopInventoryList,
  inventoryList,
  // --- Impor elemen item detail
  itemDetailModal,
  itemDetailName,
  itemDetailDesc,
  closeItemDetailButton
} from "./ui-elements.js";

export let state = {};
export let rewindHistory = [];

export const items = {
    kainJarikIbu: {
        name: "Kain Jarik Ibu",
        description: "Selembar kain batik usang dengan motif parang. Tercium wangi melati yang samar, bercampur dengan bau anyir yang membuat mual. Kenangan tentang kehangatan sekaligus ketakutan."
    },
    kelerengRetak: {
        name: "Kelereng Retak",
        description: "Sebuah kelereng gundu dengan retakan di tengahnya. Dulu warnanya indah, sekarang tampak kusam. Simbol pertemanan yang hancur berkeping-keping."
    },
    fotoKeluargaSobek: {
        name: "Foto Keluarga Sobek",
        description: "Potret keluarga yang bahagia, tapi wajah Ayah sengaja disobek hingga hilang. Di baliknya ada tulisan tangan Rika kecil: 'Ayah pergi biar Ibu tidak nangis lagi'."
    },
    bungaKambojaKering: {
        name: "Bunga Kamboja Kering",
        description: "Bunga kering yang kau temukan di dekat nisan tak bernama. Wanginya mengingatkanmu pada kematian dan sesuatu yang dikubur dalam-dalam, baik di tanah maupun di ingatan."
    },
    pecahanCermin: {
        name: "Pecahan Cermin",
        description: "Bagian dari cermin di kamar Rika. Pantulanmu di dalamnya terlihat... berbeda. Lebih tua, lebih marah, dan memendam dendam."
    }
};

export function initializeState(playerName) {
  state = {
    playerName: playerName,
    stats: {
      kejernihan: 5,
      empati: 5,
      keberanian: 5,
      stabilitas: 5,
      intuisi: 5,
    },
    inventory: {},
    journal: [],
    level: 1,
    exp: 0,
    path: ["Awal"],
    completedNodes: [],
  };
  // Setup event listener untuk tombol tutup modal item sekali saja
  closeItemDetailButton.addEventListener('click', () => {
    itemDetailModal.classList.add('hidden', 'opacity-0');
  });
  updateMood();
}

export function getDominantStat() {
  const max = Math.max(
    ...Object.values(state.stats)
  );
  return Object.entries(state.stats)
    .filter(([_, v]) => v === max)
    .map(([k]) => k);
}

export function updateMood() {
  const dominant = getDominantStat()[0];
  const moodMap = {
    empati: "Menyedihkan",
    kejernihan: "Gamang",
    keberanian: "Gelisah",
    stabilitas: "Kosong",
    intuisi: "Curiga",
  };
  moodText.textContent =
    moodMap[dominant] || "Tidak Diketahui";
}

export function updateLevelUI() {
  profileName.textContent = state.playerName;
  playerLevelText.textContent = state.level;
  levelBar.style.width = `${state.exp}%`;
}

export function gainExp(amount) {
  state.exp += amount;
  if (state.exp >= 100) {
    state.exp -= 100;
    state.level++;
  }
  updateLevelUI();
}

export function renderStats(nameEl, statsEl) {
  nameEl.textContent = state.playerName;
  statsEl.innerHTML = "";
  for (const [stat, value] of Object.entries(
      state.stats
    )) {
    const percentage = value * 10;
    const statElement =
      document.createElement("div");
    statElement.innerHTML = `
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm capitalize">${stat}</span>
        <span class="text-xs text-gray-400">${value}/10</span>
      </div>
      <div class="w-full bg-gray-700 rounded-full h-2.5">
        <div class="bg-sky-500 h-2.5 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
      </div>
    `;
    statsEl.appendChild(statElement);
  }
}

// --- FUNGSI INVENTORY YANG DIPERBARUI ---
function renderInventory(container) {
  container.innerHTML = '';
  const inventoryKeys = Object.keys(state.inventory);

  if (inventoryKeys.length === 0) {
    container.innerHTML = '<p class="text-sm text-gray-500">Inventaris kosong.</p>';
    return;
  }

  inventoryKeys.forEach(itemId => {
    const itemData = items[itemId];
    const quantity = state.inventory[itemId];
    if (itemData && quantity > 0) {
      const itemElement = document.createElement('div');
      itemElement.className = 'inventory-item p-2 rounded hover:bg-gray-800 transition-colors';
      itemElement.innerHTML = `<span>${itemData.name}</span> <span class="text-xs text-gray-500">(x${quantity})</span>`;
      
      // Mengganti alert dengan modal baru
      itemElement.onclick = () => {
        itemDetailName.textContent = itemData.name;
        itemDetailDesc.textContent = itemData.description;
        itemDetailModal.classList.remove('hidden', 'opacity-0');
      };
      container.appendChild(itemElement);
    }
  });
}
// --- AKHIR FUNGSI INVENTORY ---

export function updateMapLabel(label) {
  state.path.push(label);
  mapPath.textContent = state.path.join(" → ");
}

export function updateAllUI() {
  renderStats(playerNameElement, statsContainer);
  renderStats(
    statsModalPlayerName,
    statsModalContainer
  );
  renderInventory(desktopInventoryList);
  renderInventory(inventoryList);
  updateMood();
  updateLevelUI();
}