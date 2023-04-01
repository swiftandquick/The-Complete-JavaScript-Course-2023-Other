"use strict";

// Window object.  
console.log(this);

// this inside the function expression is undefined in strict mode, it's Window object while not in strict mode.  
const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);

// Arrow function does not get its own this keyword, so the arrow function use the lexical this keyword.  
// this is the Window object outside of the arrow function, which means this is also the Window object inside the arrow function.    
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAgeArrow(1980);

// this in a method is the object, in this case, it's the jonas object.  
const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    }
};
jonas.calcAge(1991);

// Method borrowing, the matilda object now has a calcAge method that has the same codes as jonas object's calcAge method.  
// The this keyword in maltida object’s calcAge() method represents the maltida object, because I use the maltida object to call the method.  
const matilda = {
    year: 2017, 
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// f is a regular function, it's not attach to any function, so method borrowing is invalid.  
/*
const f = jonas.calcAge;
f();
*/