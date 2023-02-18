let body = document.body
// adding a container div to the body 
const container = document.createElement('div');
container.classList.add('container');

body.appendChild(container);

//creating a column to hold a box/boxes
function createColumn(){
    // creating 1 column
    const column = document.createElement('div');
    column.classList.add('column');
    for (let i = 0; i < 16; i++){
        // creating 16 boxes per column
    const box = document.createElement('div')
    box.classList.add('box');
    column.appendChild(box);
    }

    return container.appendChild(column);
}


// creating 16 columns
// creating 16 x 16 grid
for (let i = 0; i < 16; i++){
    column = createColumn();
}


let box = document.getElementsByClassName('box');

// practice hover effect

for (let i = 0; i < 256; i++){
    box[i].addEventListener('mouseenter', () => {box[i].textContent = "Enter";});

    box[i].addEventListener('mouseleave', () => { box[i].textContent = ""});
};
