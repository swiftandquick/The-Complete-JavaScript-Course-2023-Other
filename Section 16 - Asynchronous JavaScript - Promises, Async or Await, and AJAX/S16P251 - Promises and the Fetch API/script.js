'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Use Object.values() to turn languages and currencies objects into arrays of values.  
// Use properties from the data object, languages array, and currencies array to build HTML contents.  
// Insert html (HTML contents) in the countriesContainer element as the last child.  
const renderCountry = function(data, className = '') {
    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies);
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(Number(data.population) / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
        </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
}

// Display the error message as the last child of countriesContainer.  
const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}

// If the fetch() method returns a Promise that's fulfilled, execute the then() method. 
// Return a promise which resolves with the result of parsing the body text as JSON, which is response.json().  
// Once the first then() method returns a promise, the second then() method is invoked. 
// If the first then() receives a promise that's rejected, throw a custom error.   
// In the second then() method, the response object contains the data of the URL.  
// Invoke the renderCountry() method using the data[0] variable, which should be the country name.  
// If there's no neighbor (borders array is empty), exit out of the function.  
// Otherwise, use fetch() method to return a Promise on the URL of the neighbor value.  
// In the third then() method, return response.json() again, this time the response is the fulfilled Promise from second then() method.  
// In the fourth then() method, invoke renderCountry() again to render the neighbor country of the original country.  
// If there's a rejected Promise from any stages of the code, function inside catch() will be invoked and renderError() will be invoked.  
// Whether the promise is fulfilled or rejected, codes inside finally() method is invoked.  
// finally() is invoked at the end to set the countriesContainer to visible.  
const getCountryData = function(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Country not found!  ${response.status}`);
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        renderCountry(data[0]);
        const neighbor = data[0].borders[0];
        if(!neighbor) {
            return;
        }
        else {
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
        }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(`Neighbor not found!  ${response.status}`);
        }
        else {
            return response.json();
        }
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
        console.error(`${err}`);
        renderError(`Something went wrong.  ${err.message}.  Try again!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', function() {
    getCountryData('portugal');
});
