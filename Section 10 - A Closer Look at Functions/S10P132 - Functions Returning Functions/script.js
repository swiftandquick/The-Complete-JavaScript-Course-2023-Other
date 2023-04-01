'use strict';

// greet() is a function that returns another function, takes a string as argument.  
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}.`);
    }
}

// Create a variable greeterHey, with argument of 'Hey', 'Hey' is greeting's value, and greetHey is essentially the returned function from greet() function.  
const greeterHey = greet('Hey');

// Since greetHey is the returned function inside greet(), 'Jonas' is the argument of the function, so the parameter name will be 'Jonas'.  
// The returned function inside greet() is then executed, print out both greeting (Hey) and name (Jonas).  
greeterHey('Jonas');
greeterHey('Steven');

// greet('Hello') returns a function, then I use the returned function to invoke the returned function with 'Jonas' as the argument.  
greet('Hello')('Jonas');

// I can use arrow function to write a 1-liner, it will have the same function as greet().  
// greetArr(greeting) returns an inner function with name as argument, and when the inner function is invoked, print out both greeting and name.   
const greetArr = greeting => name => console.log(`${greeting}, ${name}.`);

greetArr('Hi')('Jonas');