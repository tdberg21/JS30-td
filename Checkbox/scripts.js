const inputs = document.querySelectorAll('.inbox input[type="checkbox"]');

inputs.forEach(input => {
  input.addEventListener('click', handleClick)
})

let lastChecked;

function handleClick(event) {
  let inBetween = false;
  
  if (event.shiftKey && this.checked) {
    inputs.forEach(input => {
      if (input === this || input === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        input.checked = true;
      } 
    })   
  }

  if (event.shiftKey && !this.checked) {
    inputs.forEach(input => {
      if (input === this || input === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        input.checked = false;
      }
    })
  }

  lastChecked = this;
}