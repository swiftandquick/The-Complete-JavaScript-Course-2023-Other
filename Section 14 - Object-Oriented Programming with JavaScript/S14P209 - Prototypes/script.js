'use strict';

// Create a constructor function with parameters firstName and birthYear.  
// Person acts as the blueprint to create instances (objects).  
// Set the current object's (this) firstName and birthYear values equal to parameters' values.  
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// Create instances by calling the constructor function.  
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);

// Add a function to the constructor (blueprint) using the prototype.  
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

// Instances of Person has access to the calcAge method, which is created via Person.prototype.  
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__); // Check jonas' prototype.  
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Set a new property for the objects created using Person blueprint.  
// Objects such as jonas now can access to the species property with the value of 'Homo Sapien'.  
// While jonas has access to the species property, jonas does not own the species property.  
Person.prototype.species = 'Homo Sapien';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // true, firstName is in Person constructor.  
console.log(jonas.hasOwnProperty('species')); // false, species is not in Person constructor.  

console.log(jonas.__proto__); // Person.prototype.  
console.log(jonas.__proto__.__proto__); // Object.prototype.  
console.log(jonas.__proto__.__proto__.__proto__); // null, Object.prototype.__proto__.  

// Person.prototype.constructor point back to the Person constructor itself.  
console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 1, 2, 2, 3, 3, 4, 4];

// The __proto__ property contains all methods for the Array object.  
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // Equal to Object.prototype.  

// I can use prototype property of the Array object to create a method for all arrays.  
// unique() is a method which can be used on all arrays.  
// Transform an array into a set, then transform it back to array via spread operator, this effectively remove all duplicate values of the original array.  
Array.prototype.unique = function() {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);