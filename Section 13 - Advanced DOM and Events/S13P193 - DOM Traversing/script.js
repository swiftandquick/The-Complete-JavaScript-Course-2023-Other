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

// Select the first <h1> element.  
const h1 = document.querySelector('h1');

// Using h1 (first <h1> element) to invoke querySelectorAll() to select two child elements inside h1, which are elements with classes of 'highlight'.   
console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes); // Children of h1 as NodeList.  
console.log(h1.children); // Children of h1 as HTMLCollection.  

console.log(h1.firstChild); // First child element of h1 in NodeList.  #text
console.log(h1.firstElementChild); // First child element of h1 in HTMLCollection.  span.highlight
console.log(h1.lastChild); // Last child element of h1 in NodeList.  #text
console.log(h1.lastElementChild); // Last child element of h1 in HTMLCollection.  span.highlight

// Change the text color of first child element of h1 in HTMLCollection, which is the first <span> element, to white.  
h1.firstElementChild.style.color = 'white';

// Change the text color of last child element of h1 in HTMLCollection, which is the second <span> element, to orangered.  
h1.lastElementChild.style.color = 'orangered';

// Going upwards:  parent element.  
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest('.header')); // Traverse upward until class of 'header' is found, which is h1's parent's parent.  

// Change the background color of the .header element (h1's grandparent).  
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Selects itself, because traversing starts with current element.  
console.log(h1.closest('h1'));

// Change h1's background color.  
h1.closest('h1').style.background = 'var(--gradient-primary)';

// HTMLCollection sibling traversing.  
console.log(h1.previousElementSibling); // null, h1 is first child element of <div>.  
console.log(h1.nextElementSibling); // <h4>...</h4>, second child element of <div>.  

// NodeList sibling traversing.  
console.log(h1.previousSibling); // #text 
console.log(h1.nextSibling); // #text

// Return an HTMLCollection of h1 element's parent's child elements.  
console.log(h1.parentElement.children);

// Shrink the size of h1's sibling elements.  
[...h1.parentElement.children].forEach(function(el) {
    if(el !== h1) {
        el.style.transform = 'scale(0.5)';
    }
});