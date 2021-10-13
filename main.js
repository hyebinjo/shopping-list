'use strict';

const addBtn = document.querySelector('.addBtn');
const items = document.querySelector('.items');
const input = document.querySelector('.input');

function onadd() {
    const text = input.value;
    if(text=="") {
        input.focus();
        return;
    }
    const itemRow = creatItem(text);
    items.appendChild(itemRow);
    input.value = '';
    input.focus();
}

let id=0;
function creatItem(text) {
    const item = document.createElement('li');
    item.setAttribute('class', 'item-row');
    item.setAttribute('data-id', id);
    item.innerHTML= `
    <div class="item">
        <button class="cart" data-id=${id}><i class="fas fa-shopping-cart" data-id=${id}></i></button>
        <span class="item-name">${text}</span>
        <button class="delete" data-id=${id}><i class="fas fa-minus-circle" data-id=${id}></i></button>
    </div>
    <div class="item-divider"></div>
    `
    id++;
    return item;
}

function removeitem(id) {
    const ToBeDeleted = document.querySelector(`.item-row[data-id="${id}"]`);
    ToBeDeleted.remove();
}

function cart(id) {
    const putItem = document.querySelector(`.item-row[data-id="${id}"]`);
    const cartIcon = putItem.querySelector('.cart');
    if(cartIcon.className === "cart") {
        cartIcon.classList.add('selected');
    } else {
        cartIcon.classList.remove('selected')
    }
}

addBtn.addEventListener('click', () => {
    onadd();
});

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        onadd();
    }
})

items.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(!id) {
        return;
    } else if(e.target.className === "cart" || e.target.className ==="fas fa-shopping-cart") {
        cart(id);
    } else if(e.target.className === "delete" || e.target.className ==="fas fa-minus-circle") {
        removeitem(id);
    }
})