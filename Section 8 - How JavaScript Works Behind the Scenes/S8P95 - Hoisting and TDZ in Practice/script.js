// Use the variable me before assign it a value will print out undefined, since me is declared with var.  
console.log(me);
var me = 'Jonas';

// I will get an error because I declared job and year with let and const, so I cannot use those variables before I assign them values.  
/*
console.log(job);
console.log(year);
let job = 'teacher';
const year = 1991;
*/

// We can call function declaration before the function itself.  
// Invoke addDecl(), use 2 and 3 as arguments, return the sum.  
console.log(addDecl(2, 3));
function addDecl(a, b) {
    return a + b;
}

// However, we cannot invoke regular function expression or arrow function expression before declaration.  I will get an error.  
// In a function expression, a variable is used to store the return value, and that variable cannot be used until it's declared.  
/*
console.log(addExpr(2, 3));
const addExpr = function(a, b) {
    return a + b;
}
console.log(addArrow(2, 3));
const addArrow = (a, b) => a + b;
*/

// numProducts is undefined when the if block is executed, so deleteShoppingCart() is invoked before numProducts is set to 10.  
if(!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x); // true, x is in window object.  
console.log(y === window.y); // false, y is not in window object.  
console.log(z === window.z); // false, z is not in window object. 