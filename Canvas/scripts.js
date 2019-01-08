const canvas = document.querySelector('#draw');
console.log('ji')

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '50';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw (event) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  lastX = event.offsetX;
  lastY = event.offsetY;
  hue++;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offSetY]
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);