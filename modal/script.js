'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Create reusable openModal function to remove hidden classes
const openModal = function () {
    // remove hidden classes
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
// Create reusable closeModal function to add hidden classes
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// loop over node list (result of querySelectorAll) that contains the 3 buttons
for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModal);
}

// we don't execute the closeModal function using the ()
// we want it to only execute when this DOM event occurs, so no ()
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Global event listener for keyboard events
// We are listening for key events everywhere
// Pass in "e" object as an argument
// e can then allow us to specify key value in the object
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // if Escape key pressed
        // and IF modal does not contain the hidden class, then execute function
        // We only want keyboard event to work when its visible
        closeModal();
    }
});
