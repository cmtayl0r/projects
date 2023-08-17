'use strict';

// generate secret number
// see if guess correct
// if not reduce score number
// if not update message to "try again"
// if correct, update message "Success"
// if correct, evaluate against high score
// reset game

// Define secret number once at start of game
// Math.random() gives us a value between 0 and 1
// Math.trunc() removes the decimal points
// You add the +1 to include the number 20, not 19.999999999 as the largest number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

console.log(secretNumber);

// Define starting score as a value to change
// Keep as state variable to always be available
let score = 20;

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
        document.querySelector('.message').textContent = '⛔️ No number';
    } else if (guess === secretNumber) {
        // if guess = input number on click
        // update message
        document.querySelector('.message').textContent = '🥳 Correct guess!';
        // Change inline CSS properties in DOM, inside string
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber + '!';
    } else if (guess > secretNumber) {
        // Sub If else statement to determine if score hits 0
        if (score > 1) {
            document.querySelector('.message').textContent = '✋ Too high!';
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
            document.querySelector('.message').textContent = '✋ Too low!';
            // decrease score number
            score--;
            // update DOM content to reflect updated score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '☠️ Game over';
        }
    }
});
