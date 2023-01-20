let divCount = 16;

const body = document.querySelectorAll('.body');

for (let i = 0; i < divCount; i++) {
    body.forEach(body => {
        let createDiv = document.createElement('div');
        createDiv.className = 'column';
        body.appendChild(createDiv);
    })
}

const column = document.querySelectorAll('.column');

for (let i = 0; i < divCount; i++) {
    column.forEach(column => {
        let createDiv = document.createElement('div');
        createDiv.className = 'square';
        column.appendChild(createDiv);
    })
    
}    
    
let squares = document.querySelectorAll('.square');
squares.forEach(square => {
square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    })
})

// let gridSize = document.querySelector('.button');
// gridSize.addEventListener('click', () => {
//     let number = prompt('Enter the number of squares per side');
//     if (number < 100) {
//         column.forEach(column => {
//             column.remove();
//             column.appendChild('div')
//         })
//         divCount = number;
//         return divCount;
//     } else {

//     }
// })