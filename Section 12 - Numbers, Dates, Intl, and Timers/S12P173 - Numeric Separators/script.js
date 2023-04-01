'use strict';

// Use underscore as numeric separator.  
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

// Cannot convert, _ is not treated as a numeric separator, but part of a string.  
console.log(Number('230_000'));

// Gets 230, which is the first integer before a non-number, '_'.  
console.log(parseInt('230_000'));