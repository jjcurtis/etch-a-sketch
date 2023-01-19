let divCount = 16;

const body = document.querySelector('.body');
const column = document.querySelectorAll('div.column');
let divs = document.querySelectorAll('div');

for (let i = 0; i < divCount; i++) {
    column.forEach(column => {
        let createDiv = document.createElement('div');
        createDiv.className = 'square'
        column.appendChild(createDiv);
    })
    let squares = document.querySelectorAll('div.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        })
    })
}