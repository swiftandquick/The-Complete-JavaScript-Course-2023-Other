'use strict';

console.log(2 ** 53 - 1);

console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// BigInt, add n at the end or use the BigInt() method.  
console.log(782413782378212378218971n);
console.log(BigInt(7824137));

// BigInt must be used in operations with other BigInt values.  
console.log(10000n + 10000n);
console.log(782413782378212378218971n * 100000000n);

const huge = 782413782378212378218971n;
const num = 10;
console.log(huge * BigInt(num));

console.log(20n > 15); // true
console.log(15n >= 15); // true

// false, 15n is BigInt, 15 is number, they are different types.  
console.log(15n === 15);

console.log(typeof 15n); // bigint

// true, values are the same, == doesn't check type.  
console.log(20n == 20);

console.log(huge + " is really big!");

console.log(11n / 3n); // 3n, remove the decimal parts.  
console.log(10 / 3); 