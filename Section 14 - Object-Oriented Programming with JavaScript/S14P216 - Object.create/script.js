'use strict';

// Create an existing object PersonProto.  
// PersonProto can have functions that act like constructors.   
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// Using the existing object PersonProto to create a new object steven, steven also has the same calcAge() method as PersonProto.  
const steven = Object.create(PersonProto);

// Assign new properties name and birthYear to the object steven.  
steven.firstName = 'Steven';
steven.birthYear = 2002;

// Invoke calcAge(), which is a method inside the steven object.  
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);

// Calls init() to set properties since there's no constructor.  
sarah.init('Sarah', 1979);

console.log(sarah);