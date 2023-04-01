'use strict';

const secureBooking = function() {
    let passengerCount = 0; 
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passenger(s).`);
    }
}

const booker = secureBooking();

// Since I set booker() equals to secureBooking(), every time I invoke booker(), passengerCount increases.  
booker();
booker();
booker();

console.dir(booker);