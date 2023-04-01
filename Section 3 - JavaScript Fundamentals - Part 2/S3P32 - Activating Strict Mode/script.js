// Activate strict mode.  
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// logger is a function.  
function logger() {
    console.log('My name is Jonas.');
}

// Call the function multiple times.  
logger();
logger();
logger();

// A function can accept arguments.  
// A function can return a value.  
// The fruitProcessor function takes apples and oranges as arguments, create a String called juice using the arguments, then return the juice variable.  
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// 5 is apples' value, 0 is oranges' value, the returned juice variable will be appleJuice.  
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// This is function declaration as I declare the function name.  
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// I don't have to give the function a name, instead, I can store the returned variable to a variable.  
// This is called a function expression.  
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// To invoke the function expression, I have to call the variable name, which is calcAge2.  
const age2 = calcAge2(1991);

console.log(age1, age2);

// This arrow function takes birthYear as the argument and returns the value of the expression 2037 - birthYear.  
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// One liner can only work if there's one line of code, which is the return statement, here, I need more than 1 line of code.  
// If there are more than one argument, surround the arguments with parentheses.  
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} returns in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Inside fruitProcessor2 function, I take the apples and oranges variables, and use them as arguments for the cutFruitPieces function, 
// the cutFruitPieces function multiply the argument by 4, and return the value as applePieces and orangePieces.  
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor2(2, 3));

const calcAge4 = function (birthYear) {
    return 2037 - birthYear;
}

// Call calcAge4() function inside yearsUntilRetirement2() function.  
const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge4(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// friends array has 3 elements.  
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// I can also create an array object.  
const years = new Array(1991, 1984, 2008, 2020);

// Print out index 0, 1, 2 of the array friends.  
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// Print out the size of the array.  
console.log(friends.length);

// Print out the last element.  
console.log(friends[friends.length - 1]);

// I can update a specific element on an array, in this case, I updated index 2 of the friends array from 'Peter' to 'Jay'.  
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';

// I can have a variable as an array element.  
// An array can have different variable types.  
// An array can contain another array.  
const jonas = [firstName, 'Schedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge5 = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge5(years2[0]);
const age5 = calcAge5(years2[1]);
const age6 = calcAge5(years2[years2.length - 1]);

console.log(age4, age5, age6);

const ages = [calcAge5(years2[0]), calcAge5(years2[1]), calcAge5(years2[years2.length - 1])];
console.log(ages);

const friends2 = ['Michael', 'Steven', 'Peter'];

// Add 'Jay' to the end of the array.  
// newLength is 4, as push() returns the size of the updated array.  
const newLength = friends2.push('Jay');

console.log(friends2);
console.log(newLength);

// Add 'John' to the beginning of the array.  
friends2.unshift('John');

console.log(friends2);

// Remove the last element of the array.  
friends2.pop();
const popped = friends2.pop();
console.log(popped);
console.log(friends2);

// Remove the first element of the array.  
friends2.shift();
console.log(friends2);

// Return the index of the element on the array.  
console.log(friends2.indexOf('Steven'));

// I will get -1 because 'Bob' is not in friends2 array.  
console.log(friends2.indexOf('Bob'));

// Check whether the array includes a certain element.  
console.log(friends2.includes('Steven'));
console.log(friends2.includes('Bob'));

// Type mismatch, return false.  
friends2.push(23);
console.log(friends2.includes('23'));

if (friends2.includes('Steven')) {
    console.log("You have a friend called Steven.");
}

// jonas2 is an object with 5 key-value pairs, one of the key is firstName with the value of 'Jonas'.  
const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas2);

console.log(jonas2.lastName); // Dot
console.log(jonas2['lastName']); // Bracket Notation

// Using concatenated string inside the bracket notation.  
const nameKey = 'Name';
console.log(jonas2['first' + nameKey]);
console.log(jonas2['last' + nameKey]);

/*
const interestedIn = prompt('What do you want to know about Jonas?  Choose between firstName, lastName, age, job, and friends.');

// If the key exists in jonas2 object, print out the value.  
if (jonas2[interestedIn]) {
    console.log(jonas2[interestedIn]);
}
else {
    console.log("Wrong request!  Choose between firstName, lastName, age, job, and friends.");
}
*/

// Add new key-value pairs into the object.  
jonas2.location = 'Portugal';
jonas2['twitter'] = '@jonasschmedtmann';
console.log(jonas2);

console.log(`${jonas2.firstName} has ${jonas2.friends.length} friends, and his best friend is called ${jonas2.friends[0]}.`);

const jonas3 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        return 2037 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}

console.log(jonas3.calcAge());
console.log(jonas3.getSummary());

console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');

// Initilize rep as 1, as long as rep <= 30, add 1 to rep until rep <= 10 is false, this for loop iterates 30 times.  
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repeition ${rep}.`);
}

// I can iterate over an array by checking every index from 0 to length - 1.  
const jonas4 = [
    'Jonas',
    'Schedtmann',
    2037 - 1991,
    'teacher',
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for (let i = 0; i < jonas4.length; i++) {
    console.log(jonas4[i], typeof jonas4[i]);
    types.push(typeof jonas4[i]);
}

console.log(types);

const years3 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years3.length; i++) {
    ages2.push(2037 - years3[i]);
}

console.log(ages2);

// continue:  Jumps over one iteration in the loop.  
// If the current index of the array is a string, jump to the next index.  Only print out string values.  
for (let i = 0; i < jonas4.length; i++) {
    if (typeof jonas4[i] !== 'string') {
        continue;
    }
    console.log(jonas4[i], typeof jonas4[i]);
}

// break:  Exit the loop.  
// If the current index of the array is a number, exit the loop.  Print all elements until the element is number.  
for (let i = 0; i < jonas4.length; i++) {
    if (typeof jonas4[i] !== 'number') {
        break;
    }
    console.log(jonas4[i], typeof jonas4[i]);
}

// Iterating backward.  
for (let i = jonas4.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// The outer for loop will iterate 3 times, each time the outer for loop iterates, the inner for loop iterates 5 times.  
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Start exercise #${exercise}.`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition #${rep}.`);
    }
}

// Set rep = 1, while rep <= 10 is true, iterate the loop and execute the codes inside the while block.  
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition #${rep}.`);
    rep++;
}

// Generate an integer between 1 to 6.  
let dice = Math.trunc(Math.random() * 6) + 1;

// While dice is not equal to 6, roll the dice again until dice equals to 6.  
while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
}