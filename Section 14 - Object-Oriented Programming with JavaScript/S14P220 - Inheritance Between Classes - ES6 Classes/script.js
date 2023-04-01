'use strict';

// Getter inside a class, age is use to calculate the age by year 2037.  
// Setter to set the full name, if there's a space in the argument, then set the fullName value to the new value, otherwise, prop up an alert.  
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    get age() {
        return 2037 - this.birthYear;
    }
    set fullName2(name) {
        if(name.includes(" ")) {
            this.fullName = name;
        }
        else {
            alert(`${name} is not a full name.`);
        }
    }
    get fullName2() {
        return this.fullName;
    }
}

// PersonCl is StudentCl's parent class, objects created with StudentCl class inherits all properties and methods from PersonCl class.  
// Use super() method to set the fullName and birthYear in PersonCl constructor, course is a property unique to StudentCl class.  
// introduce() is a unique method for StudentCl.  
// Even though calcAge() exists in PersonCl, calcAge() in StudentCl overwrites calcAge() in PersonCl.  
// If an object created using StudentCl class and that object invokes calcAge(), calcAge() in StudentCl will be invoked.  
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
    }
    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}.`);
    }
}

// Create an object using StudentCl class.  
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce(); // Can access to StudentCl method.   
martha.calcAge(); // Invokes calcAge() in StudentCl(), method of the same name in subclass overwrites the method in superclass.  