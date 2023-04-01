'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Return the Promise's data by calling the json() method if Promise is fulfilled.  
// Otherwise, throw an error with the custom message.  
const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if(!response.ok) {
            throw new Error(`${errorMsg} ${response.status}.`);
        }
        else {
            return response.json();
        }
    });
}

// Return a Promise after a delay (based on sec), the Promise is rejected as reject() is invoked.  
const timeout = function (sec) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            reject(new Error('Request took too long!'));
        }, sec * 1000);
    })
}

// Because getJSON() returns a Promise almost instantly, while timeout(1) returns a Promise after 1 second, 
// getJSON() wins the race, getJSON() returns a fulfilled Promise, so the then() block is invoked and print out the data.  
Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/portugal`),
    timeout(1)
]).then(res => console.log(res[0])).catch(err => console.log(err));

// Even though the second Promise is rejected, the then() method retrieves the return second Promise and print it out.  
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
]).then(res => console.log(res));

// Using the same Promises, now I use Promise.all(), I need to have the catch() method to catch the error because second Promise is rejected.  
Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
]).then(res => console.log(res)).catch(err => console.error(err));

// Promise.any() is similar to Promise.race(), but only return the first fulfilled Promise, 
// where as Promise.race() can return any first returned Promise, even if it's rejected.  
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
]).then(res => console.log(res)).catch(err => console.error(err));