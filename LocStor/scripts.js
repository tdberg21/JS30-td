const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];


function addItemToList (event) {
  event.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  this.reset();
  items.push(item);
  populateList(items, itemsList);
};

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
    <li>
      <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''}/>
      <label for="item${index}">${plate.text}</label>
    </li>
    `;
  }).join('');
};

addItems.addEventListener('submit', addItemToList);