const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseMondal = document.querySelector('.close-modal');

// Select all elements with the class name of "show-modal".  
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function() {
    console.log('Button clicked!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Iterate through the btnsOpenModal array, give a click event for each element in the array.  
// If a button is clicked, the class of the "modal hidden" element will only have the class "modal" as "hidden" is removed, now the element will be shown.  
// If a button is clicked, the class of the "overlay hidden" element will only have the class "overlay" as "hidden" is removed, now the background will be blurred.  
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

// closeModal is a function that adds the "hidden" class to both modal and overlay elements, which hides the elements.  
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Add the "hidden" class back on if I click on the close button, which hides the elements.  
btnCloseMondal.addEventListener('click', closeModal);

// Add the "hidden" class back on if I click outside of the modal (in the overlay), which hides the elements.  
overlay.addEventListener('click', closeModal);

// Create an event when a key is pressed.  
// e is an argument in the function, which returns the event object.  
// e.key:  The key that’s being pressed. 
// classList.contains():  Returns true or false base on whether the element contains a certain class.  
// Add "hidden" class back on if I press the Esc key.  
document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});