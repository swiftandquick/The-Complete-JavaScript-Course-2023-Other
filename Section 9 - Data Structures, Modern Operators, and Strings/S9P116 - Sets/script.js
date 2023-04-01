'use strict';

// Data needed for a later exercise.  
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Define an array of weekdays.  
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Now we define hours (previously openingHours) as a separate object.  
// hours[0]'s property name is set to 'thu', index 3 of weekdays array.  
// hours[1]'s property name is set to 'fri', index 4 of weekdays array.  
// hours[2]'s property name is set to 'sat', index 5 of weekdays array.  
const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    }
};

// Data needed for first part of the section.  
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // For object methods, we can simplify the method declaration without the colon and the function keyword.  
    // Return an array include one element from the starterMenu array and one element from the mainMenu array.  
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // Object is destructured then used in console.log().  
    // I can also set the arguments with default values.  For example, if there’s no time variable in the object that’s passed in, 
    // time will be set to “20:00” by default.  
    orderDelivery({starterIndex = 1, mainIndex = 0, time = "20:00", address = "1 Washington St."}) {
        console.log(`Order received!  ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be 
                    delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
    },

    // First argument is mainIngredient, rest of the arguments are in the otherIngredients array.  
    // If there's only one argument, ...otherIngredients will be an empty array.  
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

    // ES6 enhanced object literals. 
    hours
};

// ordersSet = {‘Pasta’, ‘Pizza’, ‘Risotto’}, as the duplicated elements are removed.  
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

// I can create a set of characters by passing a string as argument.  
// new Set(‘Jonas’) = {‘J’, ‘o’, ‘n’, ‘a’, ‘s’}.  
console.log(new Set('Jonas'));

// Print out the size of the set ordersSet, which is 3.  
console.log(ordersSet.size);

// has():  Checks if the set has a certain element.  
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// Only 1 'Garlic Bread' element is added to the set as duplicate isn't allowed.  
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Remove 'Risotto' from ordersSet.  
ordersSet.delete('Risotto');
console.log(ordersSet);

// A set does not have index.   
console.log(ordersSet[0]);

// Remove all elements from ordersSet.  
// ordersSet.clear();
// console.log(ordersSet);

// Sets are iterables, we can loop over them.  
for (const order of ordersSet) {
    console.log(order);
}

// Create a set from an array.  
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

// When the array is converted to a set, there are only 3 unique elements, so size is 3.  
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// When convert a string to a set, duplicated characters are removed.  
console.log(new Set('jonasschmedtmann').size);

// Create an empty map.  
const rest = new Map();

// set():  Add a key-value pair to the map.  
// Add the key 'name' with the value of 'Classico Italiano' to the map rest.  
rest.set('name', 'Classico Italiano');

// The key can be a number.  
rest.set(1, 'Frienze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// I can chain multiple set methods to add multiple key-value pairs onto the set.  
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open.')
    .set(false, 'We are closed.');

console.log(rest);

// get():  Retrieves the value of the key that's passed in as the argument.  
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;

// 21 > 11 (open) and 21 < 23 (close), return true, rest.get(true) return 'We are open.'.  
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// 'categories' is a key in the rest Map, return true.  
console.log(rest.has('categories'));

// Delete the key-value pair with the key 2.  
rest.delete(2);

// Delete all key-value pairs.  
// rest.clear();

console.log(rest);
console.log(rest.size);

// Array can be a key.  
// we can declare an array first, then put in the array variable as the argument in both set() and get() methods.  Now both methods point to the same array.  
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// We can use the <h1> element as the key, with 'Heading' as the value.  
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// I can create a map with initialized key-value pairs.   
const question = new Map([
    ['question', 'What is the best programming language in the world?'], 
    [1, 'C'], 
    [2, 'Java'], 
    [3, 'JavaScript'], 
    ['correct', 3], 
    [true, 'Correct!'], 
    [false, 'Try again!']
]);

console.log(question);

// Use destructuring to get key-value pairs.  Index 0 is the key, index 1 is the value… of the question map.  
// Print out the key-value pairs where the type of key is a number.  
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}:  ${value}`);
    }
}

// const answer = 2;
const answer = 3;

// Long version.  
/*
let tf = false;
if (answer === question.get('correct')) {
    tf = true;
}
const msg = tf ? question.get(true) : question.get(false);
console.log(msg);
*/

// Short version.  
// Check if the 'correct' value (3) is equal to answer, if it is, return true, otherwise, return false.  
// question.get(true) will return 'Correct!', question.get(false) will return 'Try again!'.  
console.log(question.get(question.get('correct') === answer));

// I can convert a map into an array using spread operator, then contain the spread operator and the map with brackets
console.log([...question]);

// entries(), keys(), and values() methods have the same function on a map as they are on an object.  
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

console.log(Object.entries(hours));

// Convert an object into a map using Object.entries(), a map contains arrays of 2 indices, Object.entries() also return arrays of 2 indices.  
// Use hours object to create a map called hoursMap, both hours and hoursMap have the same key-value pairs.  
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);