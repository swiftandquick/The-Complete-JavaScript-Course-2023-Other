'use strict';

// Create an existing object PersonProto.  
// PersonProto can have functions that act like constructors.   
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
}

// Using the existing object PersonProto to create a new object steven, steven also has the same calcAge() method as PersonProto.  
const steven = Object.create(PersonProto);

// Using the existing object PersonProto to create a new object StudentProto, StudentProto inherits all properties and methods from PersonProto.  
const StudentProto = Object.create(PersonProto);

// For objects created using StudentProto, StudentProto's init method overwrites PersonProto's init method.  
StudentProto.init = function(fullName, birthYear, course) {
    PersonProto.init.call(this, fullName, birthYear);
    this.course = course;
}

// Create a method introduce() for StudentProto, this is only accessible for objects created using StudentProto.  
StudentProto.introduce = function() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
}

// Using the existing object StudentProto to create a new object jay, steven also has the same calcAge() method as PersonProto and StudentProto.  
const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science'); // Invoke init() method, which is function property for StudentProto (overwrites PersonProto's init() method).  
jay.introduce(); // Invoke introduce(), a function uniquely bind to StudentProto.  
jay.calcAge(); // Invoke calcAge(), a function that's in PersonProto but inherited by StudentProto.  