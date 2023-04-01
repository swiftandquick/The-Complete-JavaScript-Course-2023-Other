'use strict';

// Account class is used as a template to create objects.  
// Public fields and private fields can be defined outside of the constructor. 
// locale is a public field, which is accessible from outside of the class, acc1.locale is valid.  
// #movements is a private field, as it starts with #, which is not accessible from outside of the class, acc1.#movements.push(300) would be invalid. 
// Private field such as #pin can be defined inside the constructor, but I must also have it outside the constructor the as well.  
// #pin is set when the constructor is called, but I can't access #pin via acc1.#pin, so I must call getPin() via acc1.getPin().  
// I cannot access private fields from outside of the class.  
// The when the constructor method is invoked, a message will be printed.  
// Use deposit() and withdraw() methods to add elements into the movements array for the object.  
// #approveLoan() method always return true, but it's a private method which cannot be accessed outside of the class, acc1.#approveLoan(1000) is valid.  
// When requestLoan() is invoked, invoke #approveLoan() using current object, which return true.  
// Then, invoke the deposit method with the current object to add the val value into the #movements array.  
// If I want to chain the methods by doing multiple deposit, withdraw, and loan, 
// I need to return the current object in each method, then use the current object to invoke the next method.  
// Underscore before property names and method names indicate that they are protected properties and protected methods.  
// helper() is a static method only accessible by Account class.  
class Account {
    locale = navigator.language;
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        console.log(`Thanks for opening an account, ${owner}.`);
    }
    getPin() {
        return this.#pin;
    }
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
        return this;
    }
    withdraw(val) {
        this.deposit(-val);
        return this;
    }
    #approveLoan(val) {
        return true;
    }
    requestLoan(val) {
        if(this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
            return this;
        }
    }
    static helper() {
        console.log('Helper');
    }
}

// Create an Account-type object named acc1 with values for owner, currency, and pin.  
const acc1 = new Account('Jonas', 'EUR', 1111);

// Since acc1 is created using the Account class, acc1 has an empty movements array which we can add elements into via class methods.  
acc1.deposit(250);
acc1.withdraw(140);

// Invoke requestLoan to add 1000 to the end of the _movements array.  
acc1.requestLoan(1000);

// This does nothing.  This is invalid.  
// acc1.#approveLoan(1000);

console.log(acc1);
console.log(acc1.getPin());

Account.helper();

// By chaining methods, I add 5 elements to the #movements array.  
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());