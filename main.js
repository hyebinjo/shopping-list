'use strict';

const addBtn = document.querySelector('.addBtn');
const items = document.querySelector('.items');
const input = document.querySelector('.input');

function onadd() {
    // 인풋 텍스트 받아옴
    const text = input.value;
    // 아이템 id 생성. <li>생성
    const itemRow = creatItem(text);
    // 아이템리스트에 추가
    items.appendChild(itemRow);
    // 인풋 초기화
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
        <button class="cart" data-id=${id}><i class="fas fa-shopping-cart"></i></button>
        <span class="item-name">${text}</span>
        <button class="delete" data-id=${id}><i class="fas fa-minus-circle"></i></button>
    </div>
    <div class="item-divider"></div>
    `
    return item;
}

addBtn.addEventListener('click', () => {
    onadd();
});

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        onadd();
    }
})