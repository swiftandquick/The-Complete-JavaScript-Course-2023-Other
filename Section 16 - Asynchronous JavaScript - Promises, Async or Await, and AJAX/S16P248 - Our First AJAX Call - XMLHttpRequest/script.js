'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function(country) {
    // Create an XMLHttpRequest object and store it in the request variable.  
    const request = new XMLHttpRequest();

    // GET request retrieves the data.  
    // Open a request to retrieve data of the country from Rest Countries API.  
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

    // Send the request to the URL of Rest Countries API.  
    request.send();

    // Once request is loaded, responseText value is string in JSON string format.  
    // Use JSON.parse() to transform the JSON string into an object.  
    // Use destructuring to retrieve the data property from request.responseText.  
    // Use Object.values() to turn languages and currencies objects into arrays of values.  
    // Use properties from the data object, languages array, and currencies array to build HTML contents.  
    // Insert html (HTML contents) in the countriesContainer element as the last child.  
    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const languages = Object.values(data.languages);
        const currencies = Object.values(data.currencies);
        const html = `
            <article class="country">
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
    });
}


getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');