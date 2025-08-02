import {
  initializeState,
  updateAllUI
} from "./state.js";
import {
  startGame
} from "./game-engine.js";
import {
  playPrologue
} from "./prologue.js";
import {
  desktopJournalButton,
  mobileJournalButton,
  journalModal,
  closeJournalButton,
  mobileStatsButton,
  statsModal,
  closeStatsButton,
  rewindButton,
  // FEATURE: Impor elemen inventaris
  mobileInventoryButton,
  inventoryModal,
  closeInventoryButton,
} from "./ui-elements.js";
import {
  updateJournalUI,
  setupRewindButton
} from "./journal.js";

function setupUIEventListeners() {
  const openJournal = () => {
    updateJournalUI();
    journalModal.classList.remove("hidden");
  };
  const closeJournal = () => journalModal.classList.add("hidden");

  const openStats = () => {
    updateAllUI();
    statsModal.classList.remove("hidden");
  };
  const closeStats = () => statsModal.classList.add("hidden");

  // FEATURE: Listener untuk inventaris
  const openInventory = () => {
    updateAllUI(); // Pastikan UI inventaris ter-update
    inventoryModal.classList.remove("hidden");
  };
  const closeInventory = () => inventoryModal.classList.add("hidden");


  desktopJournalButton.addEventListener("click", openJournal);
  mobileJournalButton.addEventListener("click", openJournal);
  closeJournalButton.addEventListener("click", closeJournal);

  mobileStatsButton.addEventListener("click", openStats);
  closeStatsButton.addEventListener("click", closeStats);

  // FEATURE: Tambahkan listener ke tombol inventaris
  mobileInventoryButton.addEventListener("click", openInventory);
  closeInventoryButton.addEventListener("click", closeInventory);


  setupRewindButton(rewindButton);
}

export function init() {
  const splashScreen = document.getElementById("splash-screen");
  const nameScreen = document.getElementById("name-screen");
  const gameContainer = document.getElementById("game-container");
  const mobileActionBar = document.getElementById("mobile-action-bar");

  splashScreen.classList.remove("hidden");
  nameScreen.classList.add("hidden");
  gameContainer.classList.add("hidden");
  journalModal.classList.add("hidden");
  statsModal.classList.add("hidden");
  inventoryModal.classList.add("hidden"); // FEATURE
  mobileActionBar.classList.add("hidden");

  playPrologue();
  setupUIEventListeners();
}

document.addEventListener("DOMContentLoaded", () => {
  init();

  document.getElementById("start-journey-button").addEventListener("click", () => {
    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("name-screen").classList.remove("hidden");
  });

  document.getElementById("name-input").addEventListener("keyup", (e) => {
    const input = document.getElementById("name-input");
    const button = document.getElementById("continue-button");
    const value = input.value.trim();
    button.disabled = value === "";
    button.style.opacity = value === "" ? "0.5" : "1";
    if (e.key === "Enter" && !button.disabled) {
      button.click();
    }
  });

  document.getElementById("continue-button").addEventListener("click", () => {
    const input = document.getElementById("name-input");
    if (input.value.trim() === "") return;

    document.getElementById("name-screen").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    document.getElementById("mobile-action-bar").classList.remove("hidden");

    initializeState(input.value.trim());
    startGame();
  });
});