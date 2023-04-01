let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is fun!');

console.log(40 + 8 + 23 - 10);

// Print out the values on the console.  
console.log('Jonas');
console.log(23);

// Assign a value to the variable firstName.  
let firstName = "Matilda";

// Print out firstName, which contains a value.  
console.log(firstName);
console.log(firstName);
console.log(firstName);

// I can use _ and $ in the variable names.  
let jonas_matilda = "JM";
let $funcition = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

// This is a comment.  

/*
This is a multi-lines comment.  
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

// Checks the type of the value.  
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

// Change the value type of javascriptIsFun from boolean to String.  
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

// year is undefined, so the type and value are both undefined.  
let year;
console.log(year);
console.log(typeof year);

// Now year's type is a number.  
year = 1991;
console.log(typeof year);

// Console prints out object.  
console.log(typeof null);

// Change age from 30 to 31, let keywords allows us to change the variable's value.  
let age = 30;
age = 31;

// const variables are immutable.  
const birthYear = 1991;

// var is the old way of declaring variables.  
var job = 'programmer';
job = 'teacher';

// I can declare a variable without keywords.  
lastName = 'Schmedtmann';
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// I can log multiple values at the same time.  
console.log(ageJonas, ageSarah);

// I can do operations inside console.log.  
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// Concatenate multiple string values together.  
const firstName2 = 'Jonas';
const lastName2 = 'Schmedtmann';
console.log(firstName2 + ' ' + lastName2);

// + operator occurs before = operator, so 10 + 5 is 15, and 15 is assigned to the variable x.  
let x = 10 + 5;

// x = x + 10;
x += 10;

// x = x * 4;
x *= 4;

// x = x - 1;
x--;

console.log(x);

// Comparison operator, returns true or false.  
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

// This will return true as ageSarah is 19.  
const isFullAge = ageSarah >= 18;

// This will return true, 46 > 19.  
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x2, y2;
x2 = y2 = 25 - 10 - 5;
console.log(x2, y2);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName3 = 'Jonas';
const job3 = 'teacher';
const birthYear2 = 1991;
const year2 = 2037;

// Concatenate strings together.  
const jonas = "I'm " + firstName3 + ', a ' + (year2 - birthYear2) + " year old " + job3 + "!";
console.log(jonas);

// Put variables inside a template literal.  
const jonasNew = `I'm ${firstName3}, a ${year2 - birthYear2} year old ${job3}!`;
console.log(jonasNew);

console.log("Just a regular string...");

// Skip two lines using \n.  
console.log("String with \nmultiple \nlines.  ");

// If I skip a line in template literal, the value automatically skips a line, I don't need to use \n.  
console.log(`String with 
multipe 
lines`);

const age2 = 15;

// 15 >= 18 is false, the else block executes.  
if (age2 >= 18) {
    console.log('Sarah can start driving license.');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait for another ${yearsLeft} years.`);
}

const birthYear3 = 2012;
let century;

// 2012 <= 2000 is false, execute else block.   
if (birthYear3 <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log(century);

const inputYear = '1991';
console.log(Number(inputYear), inputYear);

// Use Number to manually convert inputYear from string to number, then add the two number values together.  
console.log(Number(inputYear) + 18);

// 'Jonas' is not a number, cannot be converted, return NaN.  
// NaN is not a number, but it has a number type.  
console.log(Number('Jonas'));
console.log(typeof NaN);

// Convert 23 to '23' via String().  
console.log(String(23), 23);

// 23 is automaticallly converted to a string.  
console.log('I am ' + 23 + " years old.");

// If we use the - sign, it converts string into numbers, so I get 10 in this case.  
console.log('23' - '10' - 3);

// Same goes for other mathematic operator that isn't +, both '23' and '2' are converted to numbers then operation proceeds.   
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 100;

// if block executes, money is truthy.  
if (money) {
    console.log("Don't spend it all.");
}
else {
    console.log("You should get a job!");
}

let height = 0;

// else block executes, height is falsy.  
if (height) {
    console.log("Height is defined!");
}
else {
    console.log("Height is undefined!");
}

const age3 = '18';

// === compares the types and values, so a string cannot be equal to a number.  
if (age3 === 18) console.log("You must become an adult. (STRICT)");

// == compares only the values, so a string can be equal to a number if they have the same value.  
if (age3 == 18) console.log("You must become an adult. (LOOSE)");

/*
// Create a prompt pop up.  
// prompt() always returns a string, so I have to convert it to a number.  
const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

// If I enter 23, the if block will execute.  
if (favorite === 23) {
    console.log('Cool!  23 is an amazing number!');
}
else if (favorite === 7) {
    console.log("7 is also a cool number!");
}
else if (favorite === 9) {
    console.log("9 is also a cool number!");
}
else {
    console.log("Number is not 23 or 7");
}
*/

const hasDriversLicense = true;
const hasGoodVision = true;

// && is AND operator.  
console.log(hasDriversLicense && hasGoodVision);

// || is OR operator.  
console.log(hasDriversLicense || hasGoodVision);

// ! is NOT operator.  
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive!");
}
else {
    console.log("Someone else should drive...");
}

const isTired = true;

// Logic operators go from left to right.  
console.log(hasDriversLicense || hasGoodVision && !isTired);

const day = 'thursday';

/* 
The switch statement has many cases, if the value match the case’s value, the codes inside the case block will be executed.  
If none of the cases match, the default case will be executed.  The break keyword exists out of the switch statement so codes 
in the below cases don’t execute.  
*/
switch (day) {
    case 'monday':
        console.log("Plan course structure.");
        console.log("Go to coding meetup!");
        break;
    case 'tuesday':
        console.log("Prepare theory videos.");
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos.');
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend.');
    default:
        console.log("Not a valid day!");
}

// if-else version.  
if (day === 'monday') {
    console.log("Plan course structure.");
    console.log("Go to coding meetup!");
}
else if (day === 'tuesday') {
    console.log("Prepare theory videos.");
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples.');
}
else if (day === 'friday') {
    console.log('Record videos.');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend.');
}
else {
    console.log("Not a valid day!");
}

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas'
console.log(`I'm ${2037 - 1991} years old ${me}.`);

const age4 = 23;

// 23 >= 18 is true, so 'I like to drink wine' is printed.  
age4 >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water.');

// Set drink to wine if 23 >= 18 to true, otherwise, set it to 'water', in this case, drink is 'wine'.  
const drink = age4 >= 18 ? 'wine' : 'water';
console.log(drink);

// if-else version.  

let drink2;
if (age4 >= 18) {
    drink2 = 'wine';
}
else {
    drink2 = 'water';
}
console.log(drink2);

// I can put ternary operator inside console.log().  
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}.`)