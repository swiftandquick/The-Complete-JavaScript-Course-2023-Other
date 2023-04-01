'use strict';

// Create an empty array booking.  
const bookings = [];

// createBooking() function expression takes 3 arguments, create an object called booking, then add the booking object to the end of the bookings array.  
// I can use the previous parameter in an operator for the next parameter.  If numPassengers is 2 and there's no argument for numPassengers, then price will be 398.  
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum, 
        numPassengers, 
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

console.log(bookings);