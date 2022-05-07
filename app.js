// import functions
import { renderOpponent } from './utils.js';
// grab dom elements
const recruitedMiceEl = document.querySelector('#recruited-mice');
const trainerHutzpahEl = document.querySelector('#trainer-hutzpah');
const trainerImgEl = document.querySelector('#trainer-img');
const form = document.querySelector('form');
const opponentsListEl = document.querySelector('.opponents');

//let state
let recruitedMice = 0;
let trainerHutzpah = 9;

let opponents = [
    { streetName: 'Fitty Spent', hutzpah: 5 },
    { streetName: 'Blok Chainz', hutzpah: 2 },
];

// set event listeners New Opponents Form!
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user input for name and hit 'more'
    const data = new FormData(form);

    const streetName = data.get('street-name');

    // use user input to update state
    const newOpponent = {
        streetName: streetName,
        hutzpah: Math.ceil(Math.random() * 5),
    };

    // update DOM - add object to array of opponents in state
    opponents.push(newOpponent);

    displayOpponents();
});

function displayOpponents() {
    // update list
    // clear out the list DO

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
displayOpponents();

function opponentClickHandler(opponent) {
    // if opponent hutzpah is 0, return
    if (opponent.hutzpah === 0) return;
    // if trainer hutzpah is 0, return
    if (trainerHutzpah === 0) return;

    // randomly decide if player hit the opponent
    const trainerHits = Math.random();
    // generate a random number between 0 and 1
    if (trainerHits < 1) {
        //reduce opponents hutzpah
        opponent.hutzpah--;
        displayOpponents();
        // alert user that they hit the goblin
        // console.log(opponent);
        alert(`You got ${opponent.streetName} spinnin! Stay focussed!`);
        // if opponent hutzpah is 0 -- increment recruits!
        if (opponent.hutzpah === 0) {
            recruitedMice++;
            recruitedMiceEl.textContent = recruitedMice;
        }
    } else {
        //else trainer missed- alert the trainer
        alert('Mice try- try again');
    }
    // randomly decide if opponent bit the trainer
    const opponentBites = Math.random();
    // if opponent bites the trainer
    if (opponentBites < 1) {
        // reduce trainer hutzpah
        trainerHutzpah--;
        // update the trainer hutzpah span with new value
        trainerHutzpahEl.textContent = trainerHutzpah;
        // alert the user
        alert(`${opponent.streetName} bit you! Now you have rabies :(`);
        // if the trainer hutzpah is 0, alert game over
        if (trainerHutzpah === 0) {
            alert('You died! :(');
            trainerImgEl.classList.add('game-over');
        }
    } else {
        alert(`${opponent.streetName} tried to bite you but missed! Show em you mean business!`);
    }
}
displayOpponents();
