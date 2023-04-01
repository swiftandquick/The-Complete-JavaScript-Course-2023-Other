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

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArr);

// Add arr elements into newArr.  
const newArr = [1, 2, ...arr];
console.log(newArr);

// Use ... to get all elements inside newArr.  
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

// newMenu array has all elements in restaurant.mainMenu array, with an extra element 'Gnocci'.  
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array from restaurant.mainMenu.  
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Combine two arrays together (mainMenu and starterMenu) into one array.  
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// I can use spread operator to change a String into an array of characters.  
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = ['mushrooms', 'asparagus', 'cheese'];
restaurant.orderPasta(...ingredients);

// Use spread operator to create a newRestaurant object, with the same properties and methods as the restaurant object.  
// The newRestaurant object also has the new properties foundIn and founder.  
const newRestaurant = {foundIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);