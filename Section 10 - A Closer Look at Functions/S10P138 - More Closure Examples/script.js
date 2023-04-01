'use strict';

// Define f in the global scope.  
let f;

// Set f equal to the inner function of g, which multiplies the function block variable a by 2.  
// The a variable is inside the backpack of the f() function.  
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

// Create another function, f, which has the same f function.  
const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

// After g() is invoked, the f() function is assigned to g() function, when f() is invoked, a is 23, and 46 will be print out.  
// The closure for the f() function is the g() function, which holds the local variable a (23).  
g();
f();
console.dir(f);

// Reassign f() function to h() function, f() function inside h() function takes b (777), and print out 1554.  
// The closure for the f() function is the h() function, which holds the local variable b (777).  
h();
f();
console.dir(f);

// Print out 'Will start in ${wait} seconds.  Then after a certain delay, execute the codes inside setTimeout()'s function argument and print out 2 additional lines.  
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds.`);
}

boardPassengers(180, 3);