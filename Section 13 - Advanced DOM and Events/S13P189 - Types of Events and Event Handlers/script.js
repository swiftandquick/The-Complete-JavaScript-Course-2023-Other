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

// Get the the first <h1> element.  
const h1 = document.querySelector('h1');

// Generate an alert message when mouse is over the h1 element.  
/*
h1.addEventListener('mouseenter', function(e) {
    alert('addEventListener:  Great!  You are reading the heading!');
});
*/

// Alternative way to generate an alert.  
// h1.onmouseenter = () => alert('addEventListener:  Great!  You are reading the heading!');

// Create an alertH1 function.  
const alertH1 = () => alert('addEventListener:  Great!  You are reading the heading!');

// Use function alertH1 as argument to generate an alert on mouse hover.  
h1.addEventListener('mouseenter', alertH1);

// Remove the event after 3 seconds.  So after 3 seconds, if I hover over h1 again, an alert message will not generate.  
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);