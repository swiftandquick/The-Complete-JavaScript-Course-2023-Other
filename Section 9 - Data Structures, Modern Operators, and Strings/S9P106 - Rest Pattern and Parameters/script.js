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

// Spread, because on right side of =.  
const arr = [1, 2, ...[3, 4]];

// Rest parameter also uses ..., but it's used on the left of the = operator.  
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Here, I use spread and rest at the same time.  
// Spread operator is used to join the array of mainMenu and starterMenu. 
// Use rest parameter to set pizza to index 0 of the joined array, which is 'Pizza'.  
// Skip index 1 of the joined array, then set risotto to index 2 of the joined array, which is 'Risotto'.  
// The remaining 4 elements are included in the array called otherFood.   
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// restaurant.openingHours has 3 objects, thu, fri, and sat.  
// I destructure the object with sat equals restaurant.openingHours.sat, and everything else (thu and fri) are stored in the weekdays array via rest parameter.   
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// If use rest parameter as the argument in the function, so I can take as many arguments as I want as an array.  
// numbers can be an array of any amount of elements, then I sum those elements and print out the sum.  
const add = function(...numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
}
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

// Use spread operator to change the array into individual elements, then in the add() function, those individual elements become an array again via rest parameter.  
const x = [23, 5, 7]; // 35
add(...x);

// Invoke orderPizza().  
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');