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

// For ||, return the first truthy value that is found.  
// If all values are falsy values, the last value will be returned.  
// 3 || 'Jonas' = 3, both 3 and 'Jonas' are truthy values, so 3 is returned.  
// '' || 'Jonas' = 'Jonas', '' is a falsy value, 'Jonas' is a truthy value, so 'Jonas' is returned.  
// true || 0 = true, true is a truthy value, 0 is a falsy value, so true is returned.  
// undefined || null = null, both undefined and null are falsy values, so null is returned.  
// undefined || 0 || '' || 'Hello' || 23 || null = 'Hello', 'Hello' is the first truthy value of the bunch.  
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// guests = 10 because numGuests isn't a property of restaurant.  
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Short-circuiting also works, because numGuests isn't a property of restaurant, so it's undefined, undefined || 10 will return 10 as 10 is a truthy value.  
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// For &&, return the first falsy value that is found.  
// If all values are truthy values, the last value will be returned.  
// 0 && 'Jonas' = 0, 0 is the first falsy value.  
// 7 && 'Jonas' = 'Jonas', there is no falsy value, last value is returned.  
// 'Hello' && 23 && null && 'Jonas' = null, null is the first falsy value, so null will be returned.  
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// If the orderPizza method exists in the restaurant object, invoke that function.  
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach');
}

// Using short-circuit, if restaurant.orderPizza doesn't exist (undefined), nothing will happen.  
// Otherwise, return the code in the second operand, which invokes the orderPizza method.  
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');