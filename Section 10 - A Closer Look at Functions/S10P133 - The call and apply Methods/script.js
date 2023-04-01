'use strict';

// Create the lufthansa object with the method book().  
const lufthansa = {
    airline: 'Lufthansa', 
    iataCode: 'LH', 
    bookings: [], 
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

console.log(lufthansa);

// Create another object eurowings.  
const eurowings = {
    airline: 'Eurowings', 
    iataCode: 'EW', 
    bookings: [], 
};

// Get a copy of the book method from the lufthansa object.  
const book = lufthansa.book;

// This does not work because the this keyword in the book() function points to no object.  
// book(23, 'Sarah Williams');

// Use call() to point the book function to eurowings object, pass in 23 and 'Sarah Williams' as argument for the book function.  
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines', 
    iataCode: 'LX', 
    bookings: []
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Create an array flightData, use apply() function to point the book function to swiss object, 
// then use elements in flightData (583 and 'George Cooper') as arguments for the book function.  
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// I can also use swiss operator to destructure an array into individual elements as arguments.  
const flightData2 = [583, 'William Cooper'];
book.call(swiss, ...flightData2);
console.log(swiss);

// Bind the book function to eurowings.  If I invoke bookEw, properties inside eurowings object such as airline and iataCode will be used.  
const bookEw = book.bind(eurowings);
bookEw(23, 'Steven Williams');
console.log(eurowings);

const bookLh = book.bind(lufthansa);
const bookLx = book.bind(swiss);

// Point the book function to eurowings object, set the first argument (flightNum) as 23.  
// I only need to have the name as argument when I invoke bookEw23().
// Both 'Jonas Schedtmann' and 'Martha Cooper' will have flightNum of 23.  
const bookEw23 = book.bind(eurowings, 23);
bookEw23('Jonas Schmedtmann');
bookEw23('Martha Cooper');

console.log(eurowings);

// Add a lufthansa planes property for lufthansa object, it starts with 300.  
lufthansa.planes = 300;

// Add a method for lufthansa object, buyPlane(), which increments planes by 1.  
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

// lufthansa.buyPlane();

// Add an event to the button, click on it will invoke buyPlane() method of the lufthansa object.  
// I use the bind() method to bind the lufthansa object to the buyPlane() method, now when buyPlane() is invoked, the this keyword is the lufthansa object.   
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// addTax is an arrow function expression that returns the value with added tax.  
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Create another function with bind() and set the rate to 0.23.  
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));