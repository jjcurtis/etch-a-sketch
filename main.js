let gridSize = document.querySelector('button');

gridSize.addEventListener('click', () => {
    const body = document.querySelectorAll('.body');
    let number = parseInt(prompt('Enter the number of squares per side'));
    let divCount;
    divCount = number;
    if (divCount > 100) {
        alert('Number exceeds threshold (100)');
    }

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
        square.style.backgroundColor = 'purple';
        })
    })

    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.border = '2px solid black');

    gridSize.remove();
})

