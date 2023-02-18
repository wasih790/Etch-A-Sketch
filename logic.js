let body = document.body
// adding a container div to the body 
const container = document.createElement('div');
container.classList.add('container');

body.appendChild(container);

const btnRow = document.createElement('div');
btnRow.classList.add('btnRow');
body.appendChild(btnRow);
// create a row for buttons

// play button
const btnPlay = document.createElement('button');
btnPlay.setAttribute('id','play');
btnPlay.textContent = "Play";
btnRow.appendChild(btnPlay);

// restart
const button = document.createElement('button');
button.setAttribute('id','restart');
button.textContent = "Restart";
btnRow.appendChild(button);





// made a button for crazy colors
const rainbow = document.createElement('button');
rainbow.setAttribute('id','crazy');
rainbow.textContent = "Crazy Color";
btnRow.appendChild(rainbow)


// erase button

const erase = document.createElement('button');
erase.setAttribute('id','erase');
erase.textContent = "Eraser";
btnRow.appendChild(erase)

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

function randomColor(){
 return "#"+((1<<24)*Math.random()|0).toString(16); 
}



let box = document.getElementsByClassName('box');

// practice hover effect, only when pressing the button play
const play = document.querySelector('#play');
play.addEventListener('click', () => {
for (let i = 0; i < 256; i++){
    box[i].addEventListener('mouseenter', () => {box[i].setAttribute("style", `background-color: blue;}`)});

};
});

// change to random color when pressed 
const crazy = document.querySelector('#crazy');
crazy.addEventListener('click', () => {
for (let i = 0; i < 256; i++){
    box[i].addEventListener('mouseenter', () => {box[i].setAttribute("style", `background-color: ${randomColor()}`)});

};
});




const restart = document.querySelector('#restart');
restart.addEventListener('click', () => {window.location.reload()});


// erase the colors and back to white
const btnErase = document.querySelector('#erase');
btnErase.addEventListener('click', () => {
for (let i = 0; i < 256; i++){
    box[i].addEventListener('mouseenter', () => {box[i].setAttribute("style", `background-color: white;}`)});

};
});