'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Select the button with "Learn more" as its text.  
const btnScrollTo = document.querySelector('.btn--scroll-to');

// Select the <section> element with #section--1 as its id.  
const section1 = document.querySelector('#section--1');

// Select all elements with class 'operations__tab', and store them in an array called tabs.   
const tabs = document.querySelectorAll('.operations__tab');

// Select the element with 'operations__tabs-container' class.  
const tabsContainer = document.querySelector('.operations__tab-container');

// Select all elements with class 'operations__content', and store them in an array called tabsContent.   
const tabsContent = document.querySelectorAll('.operations__content');

// Select the first element with the class 'nav'.  
const nav = document.querySelector('.nav');

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

// Smoothly (slowly) scroll to section1 element when the button (btnScrollTo) is clicked.   
btnScrollTo.addEventListener('click', () => section1.scrollIntoView({ behavior: 'smooth'}));

// Alternative solution.  
/*
btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
    console.log('Current scroll (X/Y): ', window.pageXOffset, window.pageYOffset);
    console.log('height / width viewport: ', document.documentElement.clientHeight, document.documentElement.clientWidth);
    window.scrollTo({left: s1coords.left + window.pageXOffset, top: s1coords.top + window.pageYOffset, behavior: 'smooth'});
});
*/

// Return a NodeList (array) with all classes with the names of 'nav__link', create a click event for each element in the NodeList.  
// For each element, prevent default behavior which moves the page down to the href target.  
// Retrieve the current element's href attribute's value, use querySelector to get the element (href target) base on id.  
// Smoothly scroll to the the target element if the link is clicked.  
/*
document.querySelectorAll('.nav__link').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    })
});
*/

// Add event listener to common parent element.  
// Determine what element originated the event.  
document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

// Because if I click on the tab, I might click on the span instead of the button, 
// so I need to traverse it and find the closest parent element with class of 'operations__tab'.  
// Remove 'operations__tab--active' class for each tab (tabs element) to make the tabs stay in its original position.  
// Remove 'operations__content--active' class for each tab content (tabsContent element) to hide all the tab contents. 
// Only add the 'operations__tab--active' class to the clicked element (clicked tab) to move the element up.  
// Each tabs element has a data-set value, which contains a number, that can be accessed via dataset.tab.  
// Select the correct element with 'operations__content' class by passing in the clicked element's data-set value.  
// Add the class 'operations__content--active' to make the correct 'operations__content' element visible.   
tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations__tab');
    if(!clicked) {
        return;
    }
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));
    clicked.classList.add('operations__tab--active');
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Because the 'mouseover' and 'mouseout' events both have similar codes, I include the codes in one function.  
// Takes e (event) and opacity as argument.
// Set the element's opacity to this, this is based on whatever is passed in from the addEventListener() function.  
// If the current object (e.target) contains an element with class of 'nav__link', do the following:  
// Set the link to the element that's hovered over (an event triggered on), which should be one of nav's children.  
// Set the siblings variable to all elements with class of 'nav__link' that is also nav's children.  
// Set the logo variable to the <img> element that is also nav's child.  
const handleHover = function(e) {
    if(e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if(el !== link) {
                el.style.opacity = this;
            }
        });
        logo.style.opacity = this;
    }
};

// Triggers an event if the mouse hovers over the nav element or its children.  
// 0.5 is the object that we pass in the bind() method, the this keyword will have the value of 0.5.  
// Set opacity of 'nav__link' elements that are not the element that's being hovered over to 0.5.  
// Set the logo's opacity of 0.5 also.  
nav.addEventListener('mouseover', handleHover.bind(0.5));

// Triggers an event when the mouse is no longer inside the nav element.  
// 1 is the object that we pass in the bind() method, the this keyword will have the value of 1.  
// When the mouse is out of the element, change opacity of the elements back to 1.  
nav.addEventListener('mouseout', handleHover.bind(1));

const initialCoords = section1.getBoundingClientRect();

// window.scrollY value increases if I scroll down. 
// initialCoords.top value stays the same. 
// Add and remove 'sticky' class depend on window.scrollY's value.  
// nav bar can be seen sticked to the top if I scroll down to section1 or below.  
/*
window.addEventListener('scroll', function() {
    if (this.window.scrollY > initialCoords.top) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
});
*/

// Get the nav element's (navbar) height.  
const navHeight = nav.getBoundingClientRect().height;

// There's only one element in entries, which occurs when threshold is 0.  
// if entry's isIntersecting value is false, add 'sticky' class to nav, otherwise, remove 'sticky' class from nav.  
// nav bar can be seen sticked to the top if I scroll below the a certain pixels (equal to navHeight) above the header element.  
const stickyNav = function(entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
}

// Create an IntersectionOberserver object and invoke it on the header element.  
// root is the element that the target is intersecting.  If I set it to null, the specified element is the viewport.  
const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`});
headerObserver.observe(header);

// Retrieve an array (NodeList) of all elements with class of 'section'.  
const allSections = document.querySelectorAll('.section');

// If entry's isIntersecting value is false, exit out of the function, otherwise, remove the target's (section) 'section--hidden' class to make section visible.  
// If isIntersecting for entry is true, also instruct the sectionObserver object to stop observing the target element (section).  
const revealSection = function(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        return;
    }
    else {
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    }
}

// root is the element that the target is intersecting.  If I set it to null, the specified element is the viewport.  
const sectionObserver = new IntersectionObserver(revealSection, {root: null, threshold: 0.15});

// Use IntersectionObserver API on all allSections elements.  
// Add 'section--hidden' class on all allSections elements to hide them.  
allSections.forEach(function(section) {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
})

// Select all <img> elements that has the property of data-src.  
const imgTargets = document.querySelectorAll('img[data-src]');

// Set the first element of entries to entry.  
// Exit out of the function if entry's isIntersecting value is false.  
// Otherwise, the src of element that's being intersected (entry.target) will equal to its data-src value.  
// For example, if entry.target had the src of "img/digital-lazy.jpg" and data-src of "img/digital.jpg", now src will update to "img/digital.jpg".  
// When entry.target is loaded, remove the intersecting element's (entry.target) 'lazy-img' class to undo the blur.  
// Use the observer to unobserve the entry.target element.  
const loadImg = function(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        return;
    }
    else {
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', function() {
            entry.target.classList.remove('lazy-img');
        });
    }
    observer.unobserve(entry.target);
}

// root is null, element that the target is intersecting is the entire viewport.  
const imgObserver = new IntersectionObserver(loadImg, {root: null, threshold: 0, rootMargin: '-200px'});

// Observe each <img> element in the imgTargets array.  
imgTargets.forEach(img => imgObserver.observe(img));


const slider = function () {

    // Retrieve all elements with 'slide' class as an array (NodeList).  
    const slides = document.querySelectorAll('.slide');

    // Select the slider buttons.  
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');

    // Select the element with class 'dots'.  
    const dotContainer = document.querySelector('.dots');

    // Select the container of the slides, which is the element with class of 'slider'.   
    // const slider = document.querySelector('.slider');

    // Current slide is 0.  
    let curSlide = 0;

    // maxSlide is the size of slides array, which is also the latest index of slides plus 1.  
    const maxSlide = slides.length;

    // Shrink the container element's (slider) width and height.  
    // Make the 'slides' elements to the right of the first 'slides' element visible.   
    /*
    slider.style.transform = 'scale(0.4) translateX(-800px)';
    slider.style.overflow = 'visible';
    */

    // For each index, add an element to the dotContainer element as the last child, each element has the data-slide property that contains the index (i).  
    const createDots = function() {
        slides.forEach(function(s, i) {
            dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    }

    // Remove all dots__dpot--active class for all elements with class of 'dots__dot'.  
    // Add 'dots__dot--active' class to the slide element that's in the argument.  
    const activateDot = function (slide) {
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    };

    // s is current element in slides array, i is current index in slides array.  
    // If current slide (slide) is 1, index 0 will have translateX(-100%), 
    // index 1 will have translateX(0%), index 2 will have translateX(100%), index 3 will have translateX(200%).  
    const goToSlide = function(slide) {
        slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
    }

    // Increment curSlide by 1.  If curSlide is equal to maxSlide - 1, set curSlide to 0 (first slide).  
    // Invoke the goToSlide() function.  
    const nextSlide = function() {
        if(curSlide === maxSlide - 1) {
            curSlide = 0;
        }
        else {
            curSlide++;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    // Decrement curSlide by 1.  If curSlide is equal to 0, set curSlide to maxSlide - 1 (last slide).  
    // Invoke the goToSlide() function.  
    const prevSlide = function() {
        if(curSlide === 0) {
            curSlide = maxSlide - 1;
        }
        else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    // Invoke goToSlide() with 0 as argument.  
    // index 0 element stays as it is (translateX(0%));
    // index 1 element moves to the right by 100% (translateX(100%));
    // index 2 element moves to the right by 200% (translateX(200%));
    // index 3 element moves to the right by 300% (translateX(300%));
    const init = function () {
        goToSlide(curSlide);
        createDots();
        activateDot(curSlide);
    };

    init();

    // Click on btnRight element will invoke nextSlide() function.  
    btnRight.addEventListener('click', nextSlide);

    // Click on btnRight element will invoke prevSlide() function.  
    btnLeft.addEventListener('click', prevSlide);

    // If I hit left arrow key, prevSlide() will be invoked.  
    // If I hit right arrow key, nextSlide() will be invoked.  
    document.addEventListener('keydown', function(e) {
        if(e.key === 'ArrowLeft') {
            prevSlide();
        }
        else if(e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Click on the dot will retrieve the dot's data-slide value.  
    // Invoke the goToSlide() function, and pass slide as argument.  
    dotContainer.addEventListener('click', function(e) {
        if(e.target.classList.contains('dots__dot')) {
            curSlide = e.target.dataset.slide;
            goToSlide(curSlide);
            activateDot(curSlide);
        }
    });

};

slider();