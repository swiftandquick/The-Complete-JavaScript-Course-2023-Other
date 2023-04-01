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

// 0 is a falsy value, so guests would be 10.  
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// ?? operator returns the first non-nullish value (null or undefined), if all values are non-nullish values, then last value will be returned. 
// 0 is not a nullish value, so first non-nullish value (0) is returned as guestCorrect.   
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);