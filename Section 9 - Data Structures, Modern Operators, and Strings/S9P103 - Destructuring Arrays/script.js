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

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring the array arr, x = arr[0], y = arr[1], z = arr[2].   
const [x, y, z] = arr;
console.log(x, y, z);

// x2 = arr[0], z2 = arr[2].  
let [x2, , z2] = arr;
console.log(x2, z2);

// Switch x2 and z2's values.  
[x2, z2] = [z2, x2];
console.log(x2, z2);

// Take index 0 of the restaurant.categories array as main's value, and index 2 as secondary's value.  
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switch main and secondary's values using a temp variable.  
/*
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/

// Switch main and secondary's values.  
[main, secondary] = [secondary, main];
console.log(main, secondary);

// start is index 0 of the returned array, which index 2 from the starterMenu array, which is "Garlic Bread".   
// start is index 1 of the returned array, which index 0 from the mainMenu array, which is "Pizza".  
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// i = nested[0], which is 2.  
// 4 is skipped.  
// [j, k] = nested[2], which is [5, 6], so we destructure the inner array, j = nested[2][0], which is 5, k = nested[2][1], which is 6.  
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// There is no index 2 in the array, so r will be the default value, which is 1.  
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Set name equal to name property's value in resturant object, same for openingHours and categories.  
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Set restaurantName equal to restaurant.name, set hours equal to restaurant.openingHours, set tags equal to restaurant.categories.  
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// There is no property on the restaurant object called menu, so menu is set to empty array by default.  
// There is a property called starterMenu, so starters is set to restaurant.starterMenu's value.  
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// a2 is originally set to 111, b2 is originally set to 999.  
// Here, I use destructuring to mutate the a2 and b2's value equal to obj's a2 and b2 values.  
let a2 = 111;
let b2 = 999;
const obj = { a2: 23, b2: 7, c2: 14};
({a2, b2} = obj);
console.log(a2, b2);

// openingHours is a property that has 3 inner objects nested in it.  
// Here, I retrieve the open (as o) and close (as c2) values from the fri inner object of the openingHours property.  
const { fri: {open: o, close: c2 } } = openingHours;
console.log(o, c2);

// Pass in the object as argument for the restaurant object's orderDelivery method.  
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});

// time and mainIndex are not defined, so they will be the default value when orderDelivery is invoked.  
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1
});

