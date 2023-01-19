let divCount = 16;

const body = document.querySelector('.body');
const column = document.querySelectorAll('.column');
let div = document.querySelectorAll('div');

for (let i = 0; i < divCount; i++) {
    let createDiv = document.createElement('div');
    createDiv.className = 'column';    
    body.appendChild(createDiv);
}


