let body = document.body
// adding a container div to the body 
const container = document.createElement('div');
container.classList.add('container');

body.appendChild(container);

//creating a column to hold a box/boxes
const column = document.createElement('div');
column.classList.add('column');
container.appendChild(column);

const box = document.createElement('div')
box.classList.add('box');
column.appendChild(box)