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

// Combine starterMenu and mainMenu elements into one array.  
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Use for-of loop to iterate over each element in the menu array, for each iteration, an element (item) is used in the for block.  
// This prints out all elements in the menu array.  
for (const item of menu) {
    console.log(item);
}

// entries():  Returns the array with both the index of the element of the array and the element itself.  
// Here, each iterable element is an array, such as [0, ‘Focaccia’], 0 is the index, ‘Focaccia’ is the value.  
// With array destructuring, i is index 0, which gets the index of the menu array's current element, el is the element, which gets the value of the current element.   
// For example:  i = 0, el = 'Focaccia'.  
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}:  ${el}`);
}

// Use spread operator to turn menu.entries into individual elements, then wrap the elements with [] to turn it into array.  
console.log([...menu.entries()]);

// If hours property exists in restaurant and mon property exists in hours, print out its open property value.  
if (restaurant.hours && restaurant.hours.mon) {
    console.log(restaurant.hours.mon.open);
}

// Optional chaining:  
// If the property before ? exists, then the inner property will be returned.  
// If the property before ? doesn't exist, then immediately return undefined.  
// restaurant.hours.mon?.open  undefined.  The property mon doesn’t exist in hours, 
// so the open property will not even be checked, so once JavaScript checks that mon doesn’t exist, undefined is immediately returned.  
console.log(restaurant.hours.mon?.open);

// Multiple optional chaining:  Check if restaurant.hours exists, if it doesn't, return undefined, 
// if it does, check if restaurant.hours.mon exists, if it doesn't, return undefined, if it does, return restaurant.hours.mon.open.  
console.log(restaurant.hours?.mon?.open);

// Check if restaurant.hours[day].open exists, if it exists print out the opening hour.  
// For the first iteration, hours[day] is essentially hours['mon'], which is also hours.mon.  
// Use short circuiting via || to retrieve the last truthy value.  
// If restaurant.hours[day]?.open returns undefined, undefined || 'close' = falsy || truthy, so 'close' will be open's value.   
// For example, mon doesn't exist in the hours object, so we print out 'closed'.  
// However, 'thu' exists in the hours object, so we print out the opening hour.  
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
    console.log(day);
    const open = restaurant.hours[day]?.open || 'close';
    console.log(`On ${day}, opening hour:  ${open}.`);
}

// I can use optional chaining for an object's methods.  
// If the order method exists in the restaurant object, invoke the order method, pass in the arguments (0, 1).  
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');

// orderRisotto is not a method in the restaurant object, so it returns an undefined value.  
// Using the nullish operator ??, undefined is a nullish value, nullish ?? non-nullish = non-nullish, so 'Method does not exist.' is printed out in the console.  
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

// We can use optional chaining on arrays.  
// Check if index 0 of the users array exist, if it does, print out index 0 object's name property, otherwise, print out 'User array empty'.  
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty.');

// Index 0 of users2 array does not exist, so undefined is returned, which is a nullish value, so via nullish operator, 'User array empty.' is printed.  
const users2 = [];
console.log(users2[0]?.name ?? 'User array empty.');

const properties = Object.keys(hours);
console.log(properties);

// There are 3 elements in the properties array, so properties.length = 3.  
let openStr = `We are open on ${properties.length} days.`;

// Object.keys():  If an object contains an array of objects, return the keys (property names) of each inner object.  
// Object.keys(hours) = [‘thu’, ‘fri’, ‘sat’]
for (const day of Object.keys(hours)) {
    console.log(day);
}

console.log(openStr);

// Object.values():  If an object contains an array of objects, return the values of each inner object.  
const values = Object.values(hours);
console.log(values);

// entries() can also be used to iterate objects instead of arrays.  
// entries():  For objects that contain inner objects, return an array that contains inner arrays, each inner array contains the key on index 0 and value in index 1.  
// Object.entries(hours)[0] = ‘thu’.  
// Object.entries(hours)[1] = {open: 12, close: 22}.  
const entries = Object.entries(hours);
console.log(entries);

// Destructure the array, index 0 is key, then destructure index 1 (value is an object) and get the object's open and close variables.  
for (const [key, {open, close}] of entries) {
    console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}