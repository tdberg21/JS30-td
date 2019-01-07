const keys = document.querySelectorAll('.key');

function playSound (event) {
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  const key = document.querySelector(`div[data-key='${event.keyCode}']`);
  if (!audio) return;
  key.classList.add('playing')
  audio.currentTime = 0;
  audio.play();
};

function endSound(event) {
  this.classList.remove('playing');
};

keys.forEach(key => {
  key.addEventListener('transitionend', endSound)
});

window.addEventListener('keydown', playSound)