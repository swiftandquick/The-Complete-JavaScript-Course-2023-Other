'use strict';

// Create a constructor function with parameters firstName and birthYear.  
// Person acts as the blueprint to create instances (objects).  
// Set the current object's (this) firstName and birthYear values equal to parameters' values.  
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// Create an instance by calling the constructor function.  
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Create other objects using the Person constructor function as blueprint.  
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person); // true, Person is used as a blueprint to create jonas.  
console.log(jay instanceof Person); // false, jay has nothing to do with Person.  