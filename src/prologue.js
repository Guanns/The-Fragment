export function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

export async function playPrologue() {
  const container = document.getElementById('prologue-container');
  const title = document.getElementById('game-title');
  const btn = document.getElementById('start-journey-button');

  const lines = [
    "Ada yang salah dengan cermin di kamar ini.",
    "Setiap malam, pantulan Rika tersenyum.",
    "Padahal, ia lupa bagaimana caranya.",
    "Tapi kau... bukan suara yang lain, kan?"
  ];

  await delay(2000);
  for (const line of lines) {
    container.innerHTML = '';
    line.split(' ').forEach(word => {
      const span = document.createElement('span');
      span.className = 'prologue-word';
      span.textContent = word + ' ';
      container.appendChild(span);
    });
    for (const span of container.childNodes) {
      await delay(300);
      span.style.opacity = '1';
    }
    await delay(2000);
    container.style.opacity = '0';
    await delay(1000);
    container.style.opacity = '1';
  }
  container.style.display = 'none';
  title.parentElement.classList.remove('hidden');
  titleTypewriter("THE FRAGMENT", title, () => btn.classList.add("fade-in"));
}

function titleTypewriter(text, element, onComplete) {
  let i = 0;
  element.innerHTML = "";
  const cursor = document.createElement('span');
  cursor.id = 'title-cursor';
  cursor.className = 'border-r-4 border-white ml-2';
  element.appendChild(cursor);

  function typing() {
    if (i < text.length) {
      cursor.insertAdjacentHTML('beforebegin', text.charAt(i));
      i++;
      setTimeout(typing, 150);
    } else {
      cursor.remove();
      if (onComplete) onComplete();
    }
  }
  typing();
}