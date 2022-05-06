// import functions
import { renderOpponent } from './utils.js';
// grab dom elements
// const recruitedMiceEl = document.querySelector('#recruited-mice');
// const hutzpahEl = document.querySelector('#trainer-hutzpah');
// const trainerImgEl = document.querySelector('#trainer-img');
const form = document.querySelector('form');
const opponentsListEl = document.querySelector('.opponents');

//let state
// let recruitedMice = 0;
let hutzpah = 9;
let opponents = [
    { name: 'Fitty Spent', hutzpah: 5 },
    { name: 'Blok Chainz', hutzpah: 2 },
];

// set event listeners New Opponents Form!
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user input for name and hit 'more'
    const data = new FormData(form);

    const streetName = data.get('street-name');

    // use user input to update state
    const newOpponent = {
        name: streetName,
        hutzpah: Math.ceil(Math.random() * 5),
    };

    // update DOM - add object to array of opponents in state
    opponents.push(newOpponent);

    displayOpponents();
});

function displayOpponents() {
    // update list
    // clear out the list DOM
    opponentsListEl.textContent = '';

    // // loop through opponents
    for (let opponent of opponents) {
    //     //render new opponent element for each item
        const OpponentEl = renderOpponent(opponent);
        //append element to HTML

        OpponentEl.addEventListener('click', () => {
            opponentClickHandler(opponent);
            // console.log('clicked a mouse');
        });
      
        opponentsListEl.append(OpponentEl);
    }
}

function opponentClickHandler(opponent) {
    // if opponent hutzpah is 0, return 
    if (opponent.hutzpah === 0) return;
    // if trainer hutzpah is 0, return
    if (hutzpah === 0) return;

    // randomly decide if player hit the opponent
    // const trainerHit = Math.random(Math.ceil());
    // generate a random number between 1 and 5 
}

displayOpponents();