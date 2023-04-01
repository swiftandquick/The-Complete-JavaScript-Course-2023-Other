'use strict';

// Arrow function does not use the this keyword, it will its parent's this keyword.    
// Here, greet() is in the global scope, this refers to the window object.  
// We define firstName as 'Matilda' in the global scope with var keyword, so Window.firstName is 'Matilda'.   
var firstName = 'Matilda';
const jonas = {
    firstName: 'Jonas', 
    year: 1991, 
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
        // Solution 1:  
        // The this keyword in isMillenial function express is Window object (if not in strict mode) or undefined (if in strict mode).  
        // isMillenial() is a regular function call inside a method, so this is undefined (in strict mode).  
        // I can solve this issue by create a variable and assign this object as the value to the variable, in this case, the variable is self.  
        // self.year is equal to jonas.year (jonas object's property), which is 1991.  
        const self = this;
        const isMillenial = function () {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        // Solution 2:  
        // Arrow function inherit the this keyword from the parent, which is the jonas object.  
        const isMillenial2 = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
        isMillenial2();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}!`);
    }
}
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(addExpr(2, 5));
console.log(addExpr(2, 5, 8, 12));

// arguments is not a valid keyword for arrow functions.  
/*
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}
addArrow(2, 5);
addArrow(2, 5, 8, 12);
*/