'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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

const whereAmI = function(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=277160083444822264908x5170`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Data not found!  ${response.status}!`);
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        const {city, country} = data;
        console.log(`You are in ${city}, ${country}.`);
        return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Data not found!  ${response.status}!`);
        }
        else {
            return response.json();
        }
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
