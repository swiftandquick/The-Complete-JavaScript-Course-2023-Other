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

const header = document.querySelector('.header'); // Get the first element with class of header.  

// Creating a <div> element.  
const message = document.createElement('div');

// Add the class 'cookie-message' to DOM element.  
message.classList.add('cookie-message');

// Put HTML codes inside the DOM element, create a button with some text.  
message.innerHTML = "We use cookies for improved functionality and analytics.  <button class='btn btn--close-cookie'>Got it!</button>";  

// Add the message element as the first child of the header element.  
header.prepend(message);

// Remove the message element when the button inside the element is clicked.  
document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove());

// Set inline styles.  
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // Return nothing, height is not an inline style property.  
console.log(message.style.color); // Returns nothing, color is defined in stylesheet, so it's not an inline style.  
console.log(message.style.backgroundColor); // Return 'rgb(55, 56, 61)'.  

console.log(getComputedStyle(message)); // Return all CSS properties of message.  
console.log(getComputedStyle(message).color); // color is not an inline style, but the value can still be returned.  
console.log(getComputedStyle(message).height); 

// Add 30 pixels to the current height.  
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

console.log(getComputedStyle(message).height); 

// Since '--color-primary' property already exists in :root selector, change the global CSS variable --color-primary's value to orangered.  
document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');

// Retrieve attributes
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className); // class

// Set the alt attribute's value.  
logo.alt = 'Beautiful minimalist logo';

// designer is a non-standard attribute, which requires getAttribute() method to return the value.  
console.log(logo.getAttribute('designer'));

// Since company attribute doesn't exist, create a company attribute with the value of 'Bankist'.  
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // Absolute path.  
console.log(logo.getAttribute('src')); // Relative path.  

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // Absolute path.  
console.log(link.getAttribute('href')); // Relative path.  

// Access to attribute's name that starts with data, which is data-version-number, return the value of data-version-number.  
console.log(logo.dataset.versionNumber);