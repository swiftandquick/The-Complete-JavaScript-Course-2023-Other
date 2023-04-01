'use strict';

console.log(Math.sqrt(25)); // 5, square root of 25 is 5.  
console.log(25 ** (1 / 2)); // 5, square root of 25 is 5.  
console.log(8 ** (1/3)); // 2, cube root of 8 is 2.  

console.log(Math.max(5, 18, 23, 11, 2)); // 23, which is the largest number of the arguments.  
console.log(Math.max(5, 18, '23', 11, 2)); // 23, '23' is converted to 23.  
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN, there is an unconvertible string '23px' as an argument.  

// PI * 10^2, which is around 314.  
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Get a random number between 0 to 1.  
console.log(Math.random());

// Get a random integer between 1 to 6.  
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);

console.log(randomInt(10, 20));

console.log(Math.trunc(23.3)); // Remove decimal parts, get 23.  
console.log(Math.trunc(-23.3)); // Remove decimal parts, get -23.  

console.log(Math.round(23.3)); // 23 is the nearest integer.  
console.log(Math.round(23.9)); // 24 is the nearest integer.  

// Rounds up, so get 24.  
console.log(Math.ceil(23.3));  
console.log(Math.ceil(23.9)); 

// Rounds down, so get 23.  
console.log(Math.floor(23.3));  
console.log(Math.floor(23.9));  
console.log(Math.floor('23.9')); // Convertible string, returns 23.  

// Format a number, decides how many decimal places there are.  
console.log((2.7).toFixed(0)); // '3', round the closest integer since there are 0 decimal digits.  
console.log((2.7).toFixed(3)); // '2.700', now there are 3 decimal digits.  
console.log((2.345).toFixed(2)); // '2.35'.  
console.log(+(2.345).toFixed(2)); // 2.35, converted to number after toFixed() is invoked.  