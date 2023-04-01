'use strict';

const flight = 'LH234';

const jonas = {
    name: 'Jonas Schmedtmann', 
    passport: 24739479284
}

// flight doesn’t change, because flight and flightNum point to two different addresses in the heap, so if flightNum changes to ‘LH999’, flight stay as ‘LH234’.  
// jonas object changes because both Jonas and the passenger parameter point to the same reference, so if passenger’s name property changes to 
// ‘Mr. Jonas Schmedtmann’, the jonas object changes to ‘Mr. Jonas Schmedtmann’ as well.  
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 24739479284) {
        console.log('Check in.');
    }
    else {
        console.log('Wrong passport.');
    }
}

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

// Since person and jonas point to the same address in the heap, changing person's passport value also changes jonas' passport value.   
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(jonas);
checkIn(flight, jonas);