'use strict';

// Account class is used as a template to create objects, I don't have to pass in movements and locale as they are set to default values.  
// The when the constructor method is invoked, a message will be printed.  
// Use deposit() and withdraw() methods to add elements into the movements array for the object.  
// Invoke approveLoan() method to return true.  
// When requestLoan() is invoked, invoke approveLoan() using current object, which return true.  
// Then, invoke the deposit method with the current object to add the val value into the _movements array.  
// Underscore before property names and method names indicate that they are protected properties and protected methods.  
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this._movements = [];
        this.locale = navigator.language;
        console.log(`Thanks for opening an account, ${owner}.`);
    }
    getMovements() {
        return this._movements;
    }
    deposit(val) {
        this._movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
    _approveLoan(val) {
        return true;
    }
    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }
}

// Create an Account-type object named acc1 with values for owner, currency, and pin.  
const acc1 = new Account('Jonas', 'EUR', 1111);

// Since acc1 is created using the Account class, acc1 has an empty movements array which we can add elements into via class methods.  
acc1.deposit(250);
acc1.withdraw(140);

// Invoke requestLoan to add 1000 to the end of the _movements array.  
acc1.requestLoan(1000);

// This does nothing.  
acc1._approveLoan(1000);

console.log(acc1);
console.log(acc1.pin);