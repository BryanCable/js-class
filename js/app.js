let userName = prompt('Your name young padawan, what is, hmm?');
console.log(userName);
let jediOrder = prompt("Arrived " + userName + " i'm glad you have. Yes, hrrmmm.The jedi order this is. Stray to the dark side you must not. Yes, hrrmmm.")

const redButton = document.querySelector('#red');
const redLs = document.querySelector('#red-ls');
redLs.className = 'hide';
redButton.addEventListener('click', (e)=> {
    redLs.classList.toggle('hide');
});

const blueButton = document.querySelector('#blue');
const blueLs = document.querySelector('#blue-ls');
blueLs.className = 'hide';
blueButton.addEventListener('click', (e)=> {
    blueLs.classList.toggle('hide');
});

const orangeButton = document.querySelector('#orange');
const orangeLs = document.querySelector('#orange-ls');
orangeLs.className = 'hide';
orangeButton.addEventListener('click', (e)=> {
    orangeLs.classList.toggle('hide');
});

const greenButton = document.querySelector('#green');
const greenLs = document.querySelector('#green-ls');
greenLs.className = 'hide';
greenButton.addEventListener('click', (e)=> {
    greenLs.classList.toggle('hide');
});

const yellowButton = document.querySelector('#yellow');
const yellowLs = document.querySelector('#yellow-ls');
yellowLs.className = 'hide';
yellowButton.addEventListener('click', (e)=> {
    yellowLs.classList.toggle('hide');
});

const purpleButton = document.querySelector('#purple');
const purpleLs = document.querySelector('#purple-ls');
purpleLs.className = 'hide';
purpleButton.addEventListener('click', (e)=> {
    purpleLs.classList.toggle('hide');
});

const pinkButton = document.querySelector('#pink');
const pinkLs = document.querySelector('#pink-ls');
pinkLs.className = 'hide';
pinkButton.addEventListener('click', (e)=> {
    pinkLs.classList.toggle('hide');
});

const whiteButton = document.querySelector('#white');
const whiteLs = document.querySelector('#white-ls');
whiteLs.className = 'hide';
whiteButton.addEventListener('click', (e)=> {
    whiteLs.classList.toggle('hide');
});

const rainbowButton = document.querySelector('#rainbow');
const rainbowLs = document.querySelector('#rainbow-ls');
rainbowLs.className = 'hide';
rainbowButton.addEventListener('click', (e)=> {
    rainbowLs.classList.toggle('hide');
});