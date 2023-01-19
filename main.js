let divCount = 16;

const body = document.querySelector('.body');
const column = document.querySelectorAll('.column');

for (let i = 0; i < divCount; i++) {
    column.forEach(column => {
        let createDiv = document.createElement('div');
        column.appendChild(createDiv);
    })
}

