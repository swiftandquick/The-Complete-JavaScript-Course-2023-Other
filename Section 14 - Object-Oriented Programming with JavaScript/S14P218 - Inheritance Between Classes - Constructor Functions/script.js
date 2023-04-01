'use strict';

// Create a constructor function with parameters firstName and birthYear.  
// Person acts as the blueprint to create instances (objects).  
// Set the current object's (this) firstName and birthYear values equal to parameters' values.  
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// Add a function to the constructor (blueprint) using the prototype.  
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

// Because Student inherits from Person, so I can pass firstName and birthYear to the Person constructor.  
// Since Person is a constructor function, I need to use the call method and pass in the current object (this) as first arguments.  
// The other properties come after the first argument.  Then, I use the Person constructor function to set firstName and birthYear.  
// course is not a property in the Person function, so its value will be set in the Student constructor function.  
const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Student.prototype object is now an object that inherits Person.prototype object.  
// Objects created with Student constructor can now access to all methods on the Person.prototype, such as calcAge().  
// I should put this line of code right after I define the Student constructor function.   
Student.prototype = Object.create(Person.prototype);

// Create a function objects created with Student constructor can access to.  
Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}!`);
}

// Create an object using the Student constructor function.  
const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calcAge();

console.log(mike.__proto__); // Contains Person and introduce().  
console.log(mike.__proto__.__proto__); // Contains calcAge().  

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

console.dir(Student.prototype.constructor); // Person