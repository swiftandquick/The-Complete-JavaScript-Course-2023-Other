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

// Get an array that contains all objects' movements array elements.  
// Only keep elements that are > 0 and sum those elements.  
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// Get an array that contains all objects' movements array elements.  
// Get the number of elements that are > 1000.  
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 1000).length;
console.log(numDeposits1000);

// Same result as numDeposits1000, use reduce() istead.  
// If current value is > 1000, return count + 1, otherwise return count, the accumulator (count) starts as 0.  
// Because we need to increment before return the accumulator (count), so increment operator (++) is placed before the count variable.  
const numDeposits1000b = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => cur > 1000 ? ++count : count, 0);
console.log(numDeposits1000b);

let a = 10;

// Console will print out 10, a is incremented, but the previous value (10) is returned before the increment.  
console.log(a++);

// Now a changes to 11.  
console.log(a);

// Now 12 will be printed out, because the increment happens before the return.   
console.log(++a);

// Create a sums object, use reduce() method to create two properties, deposits and withdrawls start with 0.  
// If current value in the array is greater than 0, add the value to deposits property, otherwise, add the value to withdrawals property.  
const {deposits, withdrawals} = accounts
    .flatMap(acc => acc.movements)
    .reduce((sums, cur) => {
        sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
        return sums;
    }, {deposits: 0, withdrawals: 0});

console.log(deposits, withdrawals);

// Create an array with each word in the sentence with the first letter capitalized.  
// If the word is includes in the expecatations array, print out the word without capitalization.  
const convertTitleCase = function(title) {
    const expectations = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
    const titleCase = title.toLowerCase().split(' ').map(word => expectations.includes(word) ? word : word[0].toUpperCase() + word.slice(1));
    return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));