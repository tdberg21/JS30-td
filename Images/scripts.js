const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen)
  panel.addEventListener('transitionend', addText)
});

function toggleOpen() {
  this.classList.toggle('open')
}

function addText(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}