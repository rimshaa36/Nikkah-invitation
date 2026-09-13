const cover = document.getElementById('cover');
const invite = document.getElementById('invite');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const music = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');

const d = document.getElementById('d');
const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');

openBtn.onclick = () => {
  cover.classList.add('seal-closing');

  setTimeout(() => {
    cover.classList.add('hidden');
    cover.classList.remove('seal-closing');
    invite.classList.remove('hidden');
    invite.classList.add('page-open');
    window.scrollTo(0, 0);

    music.play().catch(() => {});
  }, 650);
};

closeBtn.onclick = () => {
  invite.classList.remove('page-open');
  invite.classList.add('hidden');
  cover.classList.remove('hidden');
  music.pause();
  window.scrollTo(0, 0);
};

musicBtn.onclick = () => {
  if (music.paused) {
    music.play().catch(() => {});
  } else {
    music.pause();
  }
};

const target = new Date('2026-11-10T19:00:00+05:00').getTime();

function updateCountdown() {
  const x = Math.max(0, target - Date.now());
  d.textContent = String(Math.floor(x / 86400000)).padStart(2, '0');
  h.textContent = String(Math.floor((x % 86400000) / 3600000)).padStart(2, '0');
  m.textContent = String(Math.floor((x % 3600000) / 60000)).padStart(2, '0');
  s.textContent = String(Math.floor((x % 60000) / 1000)).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
