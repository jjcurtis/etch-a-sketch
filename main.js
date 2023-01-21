const gridSize = document.querySelector('button');
const page = document.querySelector('body'); 

let count = 0;

gridSize.addEventListener('click', () => {
    count += 1;

    if (count > 1) {
        const grid = document.querySelectorAll('.grid');
        grid.forEach(grid => grid.remove());
    }

    let createDiv = document.createElement('div');
    createDiv.className = 'grid';
    page.appendChild(createDiv);

    const grid = document.querySelectorAll('.grid');
    let number = parseInt(prompt('Enter the number of squares per side'));
    let divCount;
    divCount = number;
    if (divCount > 100) {
        alert('Number exceeds threshold (100)');
    }

    for (let i = 0; i < divCount; i++) {
        grid.forEach(grid => {
            let createDiv = document.createElement('div');
            createDiv.className = 'column';
            grid.appendChild(createDiv);
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
        let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        square.style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
        })
    })

    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.border = '2px solid black');
})
