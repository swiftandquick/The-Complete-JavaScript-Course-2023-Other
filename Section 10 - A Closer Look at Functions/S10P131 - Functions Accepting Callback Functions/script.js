'use strict';

// Remove all spaces from the string.  
const oneWord = function(str) {
    return str.replaceAll(' ', '').toLowerCase();
}

// Takes a string, change the first word to all upper case.  
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Create a higher order function that accepts a string and a function as argument, then invoke the function and use the string as argument via fn(str).  
// name:  I can print out the function name, if upperFirstWord is the name of the function, fn.name returns upperFirstWord.  
const transformer = function(str, fn) {
    console.log(`Original string:  ${str}`);
    console.log(`Transformed string:  ${fn(str)}`);
    console.log(`Transformed by:  ${fn.name}`);
}

// Invoke the transformer function, which is the higher order function, pass in ‘JavaScript is the best!’ string and upperFirstWord() function as arguments.  
// Inside the transformer function, upperFirstWord(‘JavaScript is the best!’) is invoked, the first-class function (upperFirstWord) returns 
// ‘JAVASCRIPT is the best!’ and print it out in the console.  
transformer('JavaScript is the best!', upperFirstWord);

// I can use oneWord as the first-class function as well.  
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
    console.log('High five!');
}

// high5 is the first-class function.  
// addEventListener is the higher function as it receives the high5 function.  
document.body.addEventListener('click', high5);

// Invoke high5 function for each element in the array, high5 will be invoked 3 times.  
['Jonas', 'Martha', 'Adam'].forEach(high5);