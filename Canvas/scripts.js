const canvas = document.querySelector('#draw');
const button = document.querySelector('button');

const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 500;
let hue = 0;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '20';

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
  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue++;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offSetY]
});
canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);
button.addEventListener('click', () => ctx.clearRect(0, 0, 800, 800));