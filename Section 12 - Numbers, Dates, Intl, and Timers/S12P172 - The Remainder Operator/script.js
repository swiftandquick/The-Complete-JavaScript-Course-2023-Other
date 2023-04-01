'use strict';

console.log(5 % 2); // 1, 5 / 2's remainder is 1.  
console.log(5 / 2); 

console.log(8 % 3); // 2
console.log(8 / 3); 

console.log(6 % 2); // 0
console.log(6 / 2);

console.log(7 % 2); // 1
console.log(7 / 2);

// Checks if number is even, if it's even, divide it by 2 will have the remainder of 0.  
const isEven = n => n % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true