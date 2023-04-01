'use strict';

// Create a constructor function with parameters firstName and birthYear.  
// Person acts as the blueprint to create instances (objects).  
// Set the current object's (this) firstName and birthYear values equal to parameters' values.  
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.calcA
}

// Create a static method hey() on Person constructor.  
Person.hey = function() {
    console.log('Hey there!');
    console.log(this);
}

// Use Person constructor to invoke hey() method.  
Person.hey();

// Create instances by calling the constructor function.  
const jonas = new Person('Jonas', 1991);

// hey() belongs to the Person constructor, I cannot invoke the hey() function using an object.  
// jonas.hey();

// I can also put static method inside a class via static keyword.  
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    static hey() {
        console.log('Hey there!');
    }
}

// To invoke the static methods inside the class, I use the class name.  
PersonCl.hey();