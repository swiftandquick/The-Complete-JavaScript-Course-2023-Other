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

// Create a function getJSON that returns a Promise.  
const getJSON = function(url, errorMsg = 'Something went wrong!') {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`${errorMsg}  ${response.status}`);
        }
        else {
            return response.json();
        }
    });
}

// Simplify the codes with getJSON() method as getJSON() returns a Promise whether it's fulfilled or rejected.  
const getCountryData = function(country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found!")
    .then(data => {
        renderCountry(data[0]);
        const neighbor = data[0].borders[0];
        if(!neighbor) {
            return;
        }
        else {
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbor}`, 'Neighbor not found!');
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
