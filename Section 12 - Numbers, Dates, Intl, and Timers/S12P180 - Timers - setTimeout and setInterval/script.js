'use strict';

// Print out "Here is your pizza." after 3 seconds.  
// Arguments after the delay (3000) are for function parameters, ing1 is ‘olives’, ing2 is ‘spinach’.  
const pizzat = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}.`), 3000, 'olives', 'spinach');

// "Waiting..." will be print out first before "Here is your pizza." is printed out, because setTimeout() is an async function.  
console.log("Waiting...");

// Use spread operator to make the array into individual arguments.  
// Save the setTimeout() method result in the pizzaTimer variable as a timeout ID.  
// Since the ingredients array has the 'spinach' element, the function inside the setTimeout() method is never executed.  
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}.`), 3000, ...ingredients);
if(ingredients.includes('spinach')) {
    clearTimeout(pizzaTimer);
}

// Display the current date and time every 1 second.  
// setInterval(() => console.log(`${new Date()}`), 1000);

// Count from 1 to 10, print out a number every second.  
let counter = 1;
const countTo10 = setInterval(function() {
    console.log(counter);
    counter++;
    if (counter === 10) {
        console.log(counter);
        clearInterval(countTo10);
    }
}, 1000);