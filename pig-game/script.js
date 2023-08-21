'use strict';

// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;
// empty global variable defined outside function, reassigned in 'init' function

// function to set starting condition values, AND on new game
const init = function () {
    scores = [0, 0]; // 0 scores for both players
    currentScore = 0;
    activePlayer = 0; // Player 1 set as zero to work with scores array
    playing = true; // state variable to decipher if game has been won or not, default true/playing

    // reset score
    score0El.textContent = 0;
    score1El.textContent = 0;
    // reset current score
    current0El.textContent = 0;
    current1El.textContent = 0;
    // remove winner classes
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    // set dice to hidden
    diceEl.classList.add('hidden');
    // reset active player to 0
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
};

init(); // trigger init function to set starting values

// Switch player function
const switchPlayer = function () {
    // reset active player current score to 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // reset currentScore to 0
    currentScore = 0;
    // switch to next player
    // Ternary operator: if active player 0, switch to 1, or else 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    // toggle classes to display active player
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. generate a random dice roll, between 1 and 6
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`; // display relevant png
        // 3. Check for a roll of 1, if true, switch to next player
        if (dice !== 1) {
            // If dice NOT 1
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to score of active player
        // scores array at position of array (active player)
        // Add current score value to that array position (0 or 1)
        scores[activePlayer] += currentScore;
        // select score class for active player
        // Display value from scores array for active player (0 or 1)
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        // 2. Check if players score is >= 100
        // if scores array 0 or 1 value
        if (scores[activePlayer] >= 100) {
            // Finish game
            // set playing variable to false (game won, deactivate buttons)
            playing = false;
            // Hide the dice
            diceEl.classList.add('hidden');
            // add winner class to active player
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            // remove player--active class
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// button that triggers the init reset function
btnNew.addEventListener('click', init);
