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

// Select the <section> element with #section--1 as its id.  
const section1 = document.querySelector('#section--1');

// Select the first element with the class 'nav'.  
const nav = document.querySelector('.nav');

// entries is an array, each element in the entries array is an object called entry.  
// entry represents the intersection between the target element and its root container at a specific moment of transition.  
const obsCallback = function(entries, observer) {
    entries.forEach(entry => {
        console.log("obs: ", entry);
    });
};

// root is the element that the target is intersecting.  If I set it to null, the specified element is the viewport.  
// In our case, target is section1 element.  
// threshold is the percentage of the intersection which the observer callback will be called.  
// Callback function (obsCallback) will trigger every time the target element (section1) is out of the view or as soon as it enter the view.  
const obsOptions = {
    root: null,
    threshold: [0, 0.2]
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// Select the first element with 'header' class.  
const header = document.querySelector('.header');

// Get the nav element's (navbar) height.  
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

// There's only one element in entries, which occurs when threshold is 0.  
// if entry's isIntersecting value is false, add 'sticky' class to nav, otherwise, remove 'sticky' class from nav.  
// nav bar can be seen sticked to the top if I scroll below the a certain pixels (equal to navHeight) above the header element.  
const stickyNav = function(entries) {
    const [entry] = entries;
    console.log("sticky: ", entry);
    if(!entry.isIntersecting) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
}

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`});
headerObserver.observe(header);