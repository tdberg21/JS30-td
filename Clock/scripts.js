const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const digHour = document.querySelector('.hour')
const digMinute = document.querySelector('.minute')
const digSecond = document.querySelector('.second')
console.log(digHour)

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  digSecond.innerHTML = seconds;

  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + 90;
  digMinute.innerHTML = minutes;


  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  digHour.innerHTML = hour;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000)

setDate()