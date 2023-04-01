'use strict';

// Data needed for a later exercise.  
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section.  
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // Return an array include one element from the starterMenu array and one element from the mainMenu array.  
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // Object is destructured then used in console.log().  
    // I can also set the arguments with default values.  For example, if there’s no time variable in the object that’s passed in, 
    // time will be set to “20:00” by default.  
    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = "20:00", address = "1 Washington St."}) {
        console.log(`Order received!  ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be 
                    delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
    },

    // First argument is mainIngredient, rest of the arguments are in the otherIngredients array.  
    // If there's only one argument, ...otherIngredients will be an empty array.  
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

const rest1 = {
    name: 'Capri', 
    numGuests: 20
};

const rest2 = {
    name: 'La Piazza', 
    owner: 'Giovanni Rossi'
};

// rest1.numGuests = 20, 20 || 10 = 20, since 20 is truthy.  
// rest2.numGuests = undefined, undefined || 10 = 10, since 10 is truthy.  
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

// Same as rest1.numGuests = rest1.numGuests || 10;
// Same as rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

// I can also use logical assignment operator for ?? operator.
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = undefined, undefined && '<ANONYMOUS'> = undefined, since undefined is falsy.  
// rest2.owner = 'Giovanni Rossi', 'Giovanni Rossi' && '<ANONYMOUS>' = '<ANONYMOUS>', since both are truthy values, last value is returned.  
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// Shortcut via logical assignment operator.  
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);