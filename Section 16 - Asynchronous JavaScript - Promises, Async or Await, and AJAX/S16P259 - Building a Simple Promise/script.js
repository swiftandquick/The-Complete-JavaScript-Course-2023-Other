'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// The Promise object contains two functions, the resolve function (1st parameter) and the reject function (2nd parameter).  
// If Math.random() returns a number greater than or equal to 0.5, resolve the promise by calling resolve().  
// Whatever is passed in the resolve method, when we call the then() method, the response will be the value inside the resolve() method, 
// in our case, the value inside resolve() method is "You win!", which will be the value of response object later on.   
// Otherwise, reject the promise by calling reject().  
// Whatever is passed in the reject() method, when we call the catch() method, the error will be the value inside the reject() method, 
// in our case, the value inside reject() method is "You lost your money!", which will be the value of error object later on.   
const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lottery draw is happening!');
    setTimeout(function() {
        if(Math.random() >= 0.5) {
            resolve('You win!');
        }
        else {
            reject(new Error('You lost your money!'));
        }
    }, 2000);
});

// lotteryPromise is a Promise object where we can call the then(), catch(), finally() methods.  
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout, wait for an amount of time in seconds, then resolve the promise after the delay.  
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

// When wait() function is resolved after 2 seconds, print out a message.  
// Then invoke wait(1) to wait for 1 second, return the resolved (fulfilled promise).  
// Invoke another then() method to print out another message after the second delay.  
// And so on, I can chain multiple delays by prosifying setTimeout().  
wait(2).then(() => {
        console.log('I waited for 2 seconds.');
        return wait(1);
    })
    .then(() => {
        console.log("I waited for 3 seconds.")
        return wait(1);
    })
    .then(() => console.log('4 seconds passed.'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));