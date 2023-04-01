'use strict';

// This is class expression.  
// const PersonCl = class {}

// This is declaration.  
// class is used as a blueprint to create objects.  
// constructor() method sets the property values for an object.
// class also contain other methods such as calcAge(), which all objects created using PersonCl as template can access to.  
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

// Create a jessica object using PersonCl as blueprint.  
const jessica = new PersonCl('Jessica', 1996);

console.log(jessica);

// Invoke the calcAge method, which is part of the PersonCl class.  
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype); // true

// I can also create a function that all objects created via PersonCl template can access to but not own via prototype.  
PersonCl.prototype.greet = function() {
    console.log(`Hey, ${this.firstName}!`);
}

// Invoke the greet() method using jessica (an object created via PersonCl class), which is created on PersonCl.prototype.  
jessica.greet();