'use strict';

/*
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
  
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
  
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
  
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
  
const accounts = [account1, account2, account3, account4];
  
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
  
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
  
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
  
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

*/
  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`You deposited ${movement}.`);
    }
    else {
        console.log(`You withrew ${Math.abs(movement)}`);
    }
}

// forEach():  A higher order function that needs a callback function, invoke the callback function every time the array iterates.  
// Use the elements inside the movements array to invoke the function.  
// First iteration, movement's value is 200, secondi teration, movement's value is 450, and so on.  
// For the callback function inside the forEach() method, first argument is the current element’s value, 
// second argument is the current element’s index, third argument is the entire array.  
movements.forEach(function(movement, index, array) {
    if(movement > 0) {
        console.log(`Movement ${index + 1}:  You deposited ${movement}.`);
    }
    else {
        console.log(`Movement ${index + 1}:  You withrew ${Math.abs(movement)}`);
    }
});

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// In a function inside the forEach() method, the first argument is the value, second argument is the key, third argument is the entire map.  
// Print out the key-value pairs of the currencies map.  
currencies.forEach(function(value, key, map) {
    console.log(`${key}:  ${value}`);
});

// Set will be { 'USD', 'GBP', 'EUR' }.  
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// Second parameter has the duplicate value of the first parameter, it’s unnecessary.  
currenciesUnique.forEach(function(value, key, map) {
    console.log(`${key}:  ${value}`);
});