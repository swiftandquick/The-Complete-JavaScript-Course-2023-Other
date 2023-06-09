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

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty array with 7 elements.  
const x = new Array(7);
console.log(x);

// Change x's array elements to 1. 
x.fill(1);
console.log(x);

// Starting from index 3 and ending in index 4 (before index 5), change x's array elements to 2.  
x.fill(2, 3, 5);
console.log(x);

// Change all elements from index 2 to index 5 to 23.  
arr.fill(23, 2, 6);
console.log(arr);

// Set the array's size to 7, then set all elements to 1.  
const y = Array.from({length: 7}, () => 1);
console.log(y);

// Set the array's size to 7, then set all elements equal to i + 1, i is the index, cur is the current value.  
const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);