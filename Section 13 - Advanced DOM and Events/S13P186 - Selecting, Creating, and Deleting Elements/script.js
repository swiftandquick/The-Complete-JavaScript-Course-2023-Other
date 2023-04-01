'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


// Lecture

console.log(document.documentElement); // <html>
console.log(document.head); // <head>
console.log(document.body); // <body>

const header = document.querySelector('.header'); // Get the first element with class of header.  
const allSections = document.querySelectorAll('.section'); // Return an array of all elements with the class section.  
console.log(allSections);

// Get the element with the ID section--1.  
document.getElementById('section--1');

// Select all <button> elements.  
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Selector all elements with class of 'btn'.  
console.log(document.getElementsByClassName('btn'));

// Creating a <div> element.  
const message = document.createElement('div');

// Add the class 'cookie-message' to DOM element.  
message.classList.add('cookie-message');

// Put text content inside the DOM element.  
// message.textContent = 'We use cookies for improved functionality and analytics.';  

// Put HTML codes inside the DOM element, create a button with some text.  
message.innerHTML = "We use cookies for improved functionality and analytics.  <button class='btn btn--close-cookie'>Got it!</button>";  

// Add the message element as the first child of the header element.  
header.prepend(message);

// Move the message element as the last child of the header element.  
// header.append(message);

// Add the message element as the last child of the header element.
// header.append(message.cloneNode(true));

// Move the message element before the header element.
// header.before(message);

// Move the message element after the header element.
// header.after(message);

// Remove the message element when the button inside the element is clicked.  
document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove());