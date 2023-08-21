'use strict';

// Define secret number once at start of game
// Math.random() gives us a value between 0 and 1
// Math.trunc() removes the decimal points
// You add the +1 to include the number 20, not 19.999999999 as the largest number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// Define starting score as a value to change
// Keep as state variable to always be available
let score = 20;

// define starting high score in session
let highScore = 0;

// reusable function for updating message element
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// Guess input
document.querySelector('.check').addEventListener('click', function () {
    // Variable connecting to input value
    // Convert value to number, from string
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        // For "No guess/input" scenario, check if a value inputted first
        // If no input when button click, it returns 0 which is a falsey value
        // 'guess' will be false
        // So, we use the not operator to turn it to true
        // This block of code can then execute (can only execute when it is true)
        displayMessage('⛔️ No number');
    } else if (guess === secretNumber) {
        // if guess = input number on click
        // update message
        displayMessage('🥳 Correct guess!');
        // Change inline CSS properties in DOM, values inside a string
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber + '!';
        // if guess higher than current high score
        if (score > highScore) {
            // set high score to current score
            highScore = score;
            // update high score value in DOM
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        // sub if else for both too high and too low scenario
        // if score is above 0 (game over)
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? '✋ Too high!!' : '✋ Too low!!'
            );
            // decrease score number
            score--;
            // update DOM content to reflect updated score
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('☠️ Game over');
        }
    }
});

// Reset game button (.again)
document.querySelector('.again').addEventListener('click', function () {
    score = 20; // reset score number
    secretNumber = Math.trunc(Math.random() * 20) + 1; // generate secret number
    console.log(secretNumber);
    document.querySelector('.guess').value = ''; // reset input to empty value
    document.querySelector('.score').textContent = score; // reset score
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

/*
    else if (guess > secretNumber) {
        // Sub If else statement to determine if score hits 0
        if (score > 1) {
            document.querySelector('.message').textContent = '✋ Too high!!';
            // decrease score number
            score--;
            // update DOM content to reflect updated score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '☠️ Game over';
        }
    } else if (guess < secretNumber) {
        // Sub If else statement to determine if score hits 0
        if (score > 1) {
            document.querySelector('.message').textContent = '✋ Too low!!';
            // decrease score number
            score--;
            // update DOM content to reflect updated score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '☠️ Game over';
        }
    }
*/
