'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Add text to the countriesContainer as the last child.  
const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.getElementsByClassName.opacity = 1;
}

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
    countriesContainer.style.opacity = 1;
}

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

// Invoke getJSON() function to retrieve the data for all three countries.   
// Use Promise.all() to run 3 Promises in parallel then print out the capital of each country.  
const get3Countries = async function(c1, c2, c3) {
    try {
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`)
        ]);
        console.log(data.map(d => d[0].capital));
    }
    catch(err) {
        console.error(err);
    }
}

get3Countries('portugal', 'canada', 'tanzania');