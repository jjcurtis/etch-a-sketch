let divCount = 16;

const body = document.querySelectorAll('.body');

for (let i = 0; i < divCount; i++) {
    body.forEach(body => {
        let createDiv = document.createElement('div');
        createDiv.className = 'column';
        body.appendChild(createDiv);
    })
    
    const column = document.querySelectorAll('.column');

    column.forEach(column => {
        let createDiv = document.createElement('div');
        createDiv.className = 'square';
        column.appendChild(createDiv);
    })

    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        })
    })
}