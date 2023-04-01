'use strict';

console.log(23 === 23.0);

// 0.1 + 0.2 is not calculated to 0.3.  
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Print out the number 23.  
console.log(Number('23'));
console.log(+'23');

// Gets the first number from the string '30px', which is 30.  The string needs to start with a number.  
console.log(Number.parseInt('30px', 10));

// String does not start with a number, return NaN.  
console.log(Number.parseInt('e23', 10));

console.log(Number.isNaN(20)); // false, 20 is a number. 
console.log(Number.isNaN('20')); // false, '20' can be converted to number.  
console.log(Number.isNaN(+'20x')); // true, +'20x' returns undefined.  
console.log(Number.isNaN(23 / 0)); // false, 23 / 0 returns Infinity, Infinity is a number.  

console.log(Number.isFinite(20)); // true, 20 is a finite number.  
console.log(isFinite('20')); // true, '20' can be converted to 20, which is a finite number.  
console.log(Number.isFinite('20')); // false, Number.isFinite() is different than global isFinite(), Number isFinite() doesn't convert string to number.  
console.log(Number.isFinite(+'20x')); // false, +'20x' returns undefined.  
console.log(Number.isFinite(23 / 0)); // false, 23 / 0 returns Infinity, Infinity is not a finite number.  

console.log(Number.isInteger(23)); // true, it's an integer.  
console.log(Number.isInteger('23')); // false, it's not a number.  
console.log(Number.isInteger(23.0)); // true, 23.0 can be converted to 23, which is an integer.  
console.log(Number.isInteger(23.5)); // false, 23.5 is not an integer.  
console.log(Number.isInteger(23/ 0)); // false, 23 / 0 returns Infinity, Infinity is not an integer.  