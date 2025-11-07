const slides = document.querySelectorAll('.slide');
function showSlide(n) {
  slides.forEach(s => s.classList.remove('active'));
  slides[n].classList.add('active');
}

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
music.volume = 0.6;
let playing = false;

musicBtn.addEventListener('click', () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = '⏸';
    playing = true;
  } else {
    music.pause();
    musicBtn.textContent = '▶';
    playing = false;
  }
});
