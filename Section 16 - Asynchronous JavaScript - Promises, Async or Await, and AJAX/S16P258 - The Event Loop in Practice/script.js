'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// 'Test start!' and 'Test end!' will print out first, because they are synchronous codes.  
// The resolved promise will be put on a microtask queue, microtask queue has priority over callback queue, 
// so 'Resolve promise 1!' and 'Resolve promise 2!' will print next.  
// '0 second timer!' is in the setTimeout() method, which is in the callback queue, so it will print out last.  
console.log('Test start!');
setTimeout(() => console.log('0 second timer!'), 0);
Promise.resolve('Resolved promise 1!').then(res => console.log(res));
Promise.resolve('Resolved promise 2!').then(res => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log(res);
});
console.log('Test end!');