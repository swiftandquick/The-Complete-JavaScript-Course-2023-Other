'use strict';

const runOnce = function() {
    console.log('This will never run again.');
}

runOnce();

// Create an unnamed function, wrap it around with parentheses to make it a function value, then invoke the unnamed function by putting () at the end.  
// This function can only invoke once and never run again.  
(function () {
    console.log('This will never run again.');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will also never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// const values are not usable outside of the block scope, but var values can be used outside of the block scope.  
// console.log(isPrivate);
console.log(notPrivate);