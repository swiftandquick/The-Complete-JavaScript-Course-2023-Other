'use strict';

// Data needed for a later exercise.  
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Index 0 of 'A320' string is 'A'.  
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

// I can get the number of characters on a strength.  
console.log(airline.length);
console.log('B737'.length);

// 'r' is the 7th character on the String, so it's on index 6.  
// There is also a second r in 'Portugal', but indexOf only returns the index of the first 'r' character found in the String.  
console.log(airline.indexOf('r'));

// Last occurence of 'r' is in index 10, so 10 is returned.  
console.log(airline.lastIndexOf('r'));

// Find the index of the first occurence of the substring "Portugal", 'P' is in index 8, so 8 is returned.  
console.log(airline.indexOf('Portugal'));

// If substring doesn't exist, return -1.  
console.log(airline.indexOf('Spain'));

// Remove characters before index 4.  
console.log(airline.slice(4));

// Remove characters before index 4 and after index 6.  
console.log(airline.slice(4, 7));

// Remove characters after index 2, which is the index before the first ' '.  
console.log(airline.slice(0, airline.indexOf(' ')));

// The last ' ' is in index 8, the character next to it is 'P', which is in index 9, remove all characters before index 9.  
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Keep the last two characters.  
console.log(airline.slice(-2));

// Remove the first and last character.  
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
    // B and E are middle seats in a plane, print 'You got the middle seat!' if last character of the string is B or E.  
    // Retrieve the last character of the string.  
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('You got the middle seat!');
    }
    else {
        console.log('You got lucky!');
    }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Boxing:  Takes a string and puts it into a box, which is an object.  
console.log(new String('jonas'));
console.log(typeof new String('jonas'));

// All string methods return a primitive (string), if I use slice() on a string object, the type will become a string.   
console.log(typeof new String('jonas').slice(1));

// Transform all characters to lower case.  
console.log(airline.toLowerCase());

// Transform all characters to upper case.  
console.log(airline.toUpperCase());

// Change the string 'jOnAS' to 'Jonas', which capitalized first letter and rest are lower case.  
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails.  
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase(); // Change to lower case.  
const trimmedEmail = lowerEmail.trim(); // Remove white spaces from both ends.  
console.log(trimmedEmail);

// Chaining multiple String methods.  
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Replace substrings with replace() method.  
const priceGB = '288,97 GBP';
const priceUS = priceGB.replace('GBP', 'USD').replace(',', '.');
console.log(priceUS);

// Replaces all occurrences of 'door' to 'gate'.  
const announcement = 'All passengers come to boarding door 23.  Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// Alternative solution, / surrounds door, now door is a regular expression, g flag stands for global, replace all 'door' substring with 'gate' substring.  
console.log(announcement.replace(/door/g, 'gate'));

// includes():  Checks if the string contains a substring.  
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.includes('Air'));

// Checks if the plane2 string start with 'Airbus' and end with 'neo'.  
if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
    console.log('Part of the new Airbus family!');
}

// Check if the string that's passed in (items) has the 'knife' or 'gun' substring.  
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not allowed on board.');
    }
    else {
        console.log('Welcome aboard!');
    }
}
checkBaggage('I have a laptop, some Food, and a pocket Knife.');
checkBaggage('Socks and camera.');
checkBaggage('Got some snacks and a gun for protection.');

// Split up the string by '+', then store the result as an array.  
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

// Use array destructuring to retrieve firstName as index 0's value and lastName as index 1's value.  
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Use join() to concatenate all elements of an array into a string, use ' ' as a separator.  
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
    // Split the string into individual elements via ' ' separator, store the elements as the names array.  
    const names = name.split(' ');
    // Define an empty array.  
    const namesUpper = [];
    // For each element in the names array, capitalize the first letter.  
    for(const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    // Use join() to concatenate all elements of the array back together, with ' ' as the separator.  
    console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Add '+' to the start of the string until the length of the string is 25.  
// Then add '+' to the end of the string until the length of the string is 30.  
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

// Change the every character besides the last 4 characters to '*'.  
const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4891842918421));
console.log(maskCreditCard(43289589325893285932));
console.log(maskCreditCard('3128938921382913213212'));

// Use repeat() in template literal to repeat a string multiple times.  
const planesInLine = function (n) {
    console.log(`There are ${n} planes in the line ${'plane'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);