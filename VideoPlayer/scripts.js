const player = document.querySelector('.player'),
  video = player.querySelector('.player__video'),
  progress = player.querySelector('.progress'),
  // progress = player.querySelector('.progress'),
  progressBar = player.querySelector('.progress__filled'),
  toggle = player.querySelector('.toggle'),
  skipButtons = player.querySelectorAll('[data-skip]'),
  ranges = player.querySelectorAll('.player__slider'),
  fullButton = player.querySelector('.fullscreen__button');

function togglePlay() {
  if (video.paused) {
    video.play()
  } else video.pause();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime =+ parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = ( video.currentTime / video.duration ) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => {
  button.addEventListener('click', skip)
});
ranges.forEach(range => {
  range.addEventListener('change', handleRangeUpdate)
});
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
fullButton.addEventListener('click', goFull)