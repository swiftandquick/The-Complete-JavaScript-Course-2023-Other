function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        // firstName is global variable.  
        // age is defined in outer function calcAge().  
        // birthYear is passed into calcAge() function as arguments.  
        // firstName, age, and birthYear are all accessible in printAge() function.  
        let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // firstName inside the if block overrides the firstName from the global scope, so firstName in if block is 'Steven'.  
            const firstName = 'Steven';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            // Since the if block is being executed, output's value is also updated.              
            output = "New output!";
        }

        // millenial is declared with var keyword, so it can be accessed outside of the if block.   
        console.log(millenial);
        console.log(output);
    }

    // Invoke printAge() inner function.  
    printAge();

    return age;
}

const firstName = 'Jonas';
// Invoke calcAge() function, pass in 1991 as argument.  
calcAge(1991);

// Print 2.  
const number = 2;
if (number === 2) {
    var number2 = 3;
}
console.log(number2);

// Print 4.  
const number3 = 2;
if (number3 === 2) {
    const number3 = 4;
    console.log(number3);
}