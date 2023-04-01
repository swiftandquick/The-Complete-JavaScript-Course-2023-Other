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
    countriesContainer.style.opacity = 1;
}

// Create an XMLHttpRequest object and store it in the request variable.  
// GET request retrieves the data.  
// Open a request to retrieve data of the country from Rest Countries API.  
// Send the request to the URL of Rest Countries API.  
// Once request is loaded, responseText value is string in JSON string format.  
// Use JSON.parse() to transform the JSON string into an object.  
// Use destructuring to retrieve the data property from request.responseText.  
// Invoke renderCountry() function to render the HTML codes.  
// Get the first borders element and store it as neighbor variable.  
// If neighbor is undefined, such as the country has no bordered countries, exit out of the function.  
// Otherwise, create request2 XMLHttpRequest to retrieve the data on the neighbor element. 
// Since the borders property return values such as ESP (as in Spain), the link isn't start with 
// https://restcountries.com/v3.1/name/, but https://restcountries.com/v3.1/alpha/.  
// Then use renderCountry() function to render the HTML codes to display the neighbor country.  
const getCountryData = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data);
        const [neighbor] = data.borders;
        console.log(neighbor);
        if(!neighbor) {
            return;
        }
        else {
            const request2 = new XMLHttpRequest();
            request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
            request2.send();
            request2.addEventListener('load', function() {
                const [data2] = JSON.parse(this.responseText);
                renderCountry(data2, 'neighbour');
            });
        }
    });
}

getCountryData('usa');

setTimeout(() => {
    console.log('1 second passed.');
    setTimeout(() => {
        console.log('2 seconds passed.');
        setTimeout(() => {
            console.log('3 seconds passed.');
            setTimeout(() => {
                console.log('4 seconds passed.');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);