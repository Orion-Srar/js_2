// є сторінка, на якій є блок, я кому знаходиьтся цифра.
//     написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1


const block = document.getElementById('block');
const number = localStorage.getItem('count') || 0;
newNumber = +number + 1;
block.innerText = newNumber;
localStorage.setItem('count', newNumber);

