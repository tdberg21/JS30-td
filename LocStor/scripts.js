const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearAllItemsButton = document.querySelector('.clear-items-button');
const checkAllItemsButton = document.querySelector('.check-items-button');
const unCheckAllItemsButton = document.querySelector('.uncheck-items-button');


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
  localStorage.setItem('items', JSON.stringify(items));
};

function populateList (plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
    <li>
      <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''}/>
      <label for="item${index}">${plate.text}</label>
    </li>
    `;
  }).join('');
};

function toggleStatus (event) {
  if(!event.target.matches('input')) return;
  const element = event.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
 };

 function clearAllItems () {
  itemsList.innerHTML = '';
  localStorage.setItem('items', JSON.stringify([]));
 };

 function checkAllItems () {
   items.forEach(item => {
     item.done = true;
    })
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
 }

 function unCheckAllItems () {
   items.forEach(item => {
     item.done = false;
    })
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
 }

addItems.addEventListener('submit', addItemToList);
itemsList.addEventListener('click', toggleStatus);
clearAllItemsButton.addEventListener('click', clearAllItems);
checkAllItemsButton.addEventListener('click', checkAllItems);
unCheckAllItemsButton.addEventListener('click', unCheckAllItems);

populateList(items, itemsList);