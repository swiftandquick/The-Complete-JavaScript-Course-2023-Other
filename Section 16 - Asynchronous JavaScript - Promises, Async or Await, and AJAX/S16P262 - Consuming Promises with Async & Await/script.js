'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Promisifying Geolocation API.
// If promise is fulfilled, invoke the resolve() method.  
// If promise is rejected, invoke the reject() method.  
const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

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

// whereAmI is an asynchronous function where I can use the await keyword in it.  
// Codes below the await keyword will have to wait until the Promise is fulfilled or rejected before executing.  
// Invoke getPosition(), the returned value from the promise will be stored in pos.  
// Set the lat and lng values based on two properties of pos.coords, latitude and longitude.  
// Use fetch() to retrieve data from the specified URL, awaiting a response (resGeo).  
// res is the response object (if promise is fulfilled) or the error object (if promise is rejected).  
// Use res.json() to retrieve the data, await that piece of code, and the returned value (dataGeo) will be the data.  
// Use fetch() to retrieve data from the specified URL, awaiting a response (res).  
// res is the response object (if promise is fulfilled) or the error object (if promise is rejected).  
// Use res.json() to retrieve the data, await that piece of code, and the returned value (data) will be the data.  
// data[0] contains the country's name, render HTML codes base on the country's name.  
// If res or resGeo's ok value is false, which means the promise are rejected, set up custom error message.  
// The async function's try block returns a Promise that contains the PromiseResult property, which contains the returned string.  
// In case if the Promise is rejected anywhere in the try block, reject promise returned from async function by throwing an error.  
const whereAmI = async function() {
    try {
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=277160083444822264908x5170`);
        if(!resGeo.ok) {
            throw new Error('Problem getting location data.');
        }
        const dataGeo = await resGeo.json();
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
        if(!res.ok) {
            throw new Error('Problem getting country.');
        }
        const data = await res.json();
        renderCountry(data[0]);
        return `You are in ${dataGeo.city}, ${dataGeo.country}.`;
    }
    catch(err) {
        console.log(err.message);
        renderError(err.message);
        throw err;
    }
}

console.log('1. Will get location.');

// city is a Promise as whereAmI() returns a Promise, I will print out a Promise.  
// const city = whereAmI();
// console.log(city);

// When whereAmI() is invoked, a Promise is returned, in case of the Promise is fulfilled, invoke then().  
// I use the then() method to retrieve the response object, which is the string that's returned in the end of the try block inside whereAmI() functionn.  
// Print out the error message in case if the Promise is rejected.  
// whereAmI().then(city => console.log(city)).catch(err => console.error(err.message)).finally(() => console.log('2. Finished getting location.'));

// Async function version.  
(async function() {
    try {
        const city = await whereAmI();
        console.log(city);
    }
    catch(err) {
        console.error(err.message);
    }
    finally {
        console.log('2. Finished getting location.');
    }
})();

// I try to reassign value for a constant variable, I get an error, catch() catches and prints the error.  
try {
    const x = 2;
    x = 3;
}
catch(err) {
    console.log(err.message);
}