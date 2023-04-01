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

// acc is the accumulator value, curr is the current value, i is the index.  
// For the first iteration, i = 1, acc = 200.  For the second iteration, i = 2, curr = 200, acc = 0 + 200 = 200.  
// For the third iteration i = 3, curr = 450, acc = 200 + 450 = 650.  And so on until the last index is iterated and final value is calculated.  
const balance = movements.reduce(function(acc, cur, i, arr) {
    console.log(`Iteration ${i}:  ${acc}`);
    return acc + cur;
});

console.log(balance);

// Arrow function version.  Also, here, I set the initial value to 1000, so the final returned value is 1000 more than the sum of the movements array.  
const balance2 = movements.reduce((acc, cur) => acc + cur, 1000);
console.log(balance2);

// For loop version.  
let balance3 = 0;
for (const mov of movements) {
    balance3 += mov;
}
console.log(balance3);

// Find the maximum value with reduce(), set initial value as first index (index 0) of movements array.  
// If accumulator (acc) is greater than current value (mov), set acc (accumulator) as the acc (accumulator) in the next iteration.  
// Otherwise, set current value (mov) as the acc (accumulator) in the next iteration.  
const max = movements.reduce(
    (acc, mov) => {
        if (acc > mov) {
            return acc;
        }
        else {
            return mov;
        }
    }, movements[0]
);

console.log(max);