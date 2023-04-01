'use strict';

// Current date.  
const now = new Date();
console.log(now);

// Specified date.  
console.log(new Date('Aug 02 2020 18:05:41'));

// Did not specify time, time is set to 12 am.  
console.log(new Date('December 24, 2015'));

// year, month, day, hour, minute, second.  
console.log(new Date(2037, 10, 19, 15, 23, 5));

// Oct 31 doesn't exist, date is now Dec 1.  
console.log(new Date(2037, 10, 31));

console.log(new Date(0));

// 3 days after the starting date value.  
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Get the year, month, date, day, hour, mihnutem second from the date.  
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

// Convert to ISO string.  
console.log(future.toISOString());

// Get the time in milliseconds since epoch (12 am in Jan 1 of 1970).  
console.log(future.getTime());

// Convert the time back to date.  
console.log(new Date(2142274985000));

// Get the current date and time.  
console.log(Date.now());

future.setFullYear(2040);
console.log(future);