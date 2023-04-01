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

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
const dogSarahStr = dogSarah.curFood >= dogSarah.recommendedFood ? 'Eating too much!' : 'Eating too little';

console.log(dogSarah);
console.log(dogSarahStr);

const ownersEatTooMuch = dogs.filter(dog => dog.curFood >= dog.recommendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);;

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

const tooMuchStr = ownersEatTooMuch.reduce((currentStr, owner, i) => {
    if (i != 0) {
        return owner + " and " + currentStr;
    }
    else {
        return owner + currentStr;
    }
}, "'s dogs eat too much!");

const tooLittleStr = ownersEatTooLittle.reduce((currentStr, owner, i) => {
    if (i != 0) {
        return owner + " and " + currentStr;
    }
    else {
        return owner + currentStr;
    }
}, "'s dogs eat too little!");

console.log(tooMuchStr);
console.log(tooLittleStr);

// Alternative solution.  
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

const exactAmount = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(exactAmount);

const okAmount = dogs.some(dog => dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * 0.9);
console.log(okAmount);

const dogOk = dogs.filter(dog => dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * 0.9);
console.log(dogOk);

const dogsCopy = dogs.slice().sort((a, b) => {
    if (a.recommendedFood > b.recommendedFood) {
        return 1;
    }
    else {
        return -1;
    }
});

console.log(dogsCopy);