'use strict';

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

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-07-26T17:01:17.194Z",
        "2020-07-28T23:36:17.929Z",
        "2020-08-01T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};
  
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};
  
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-07-26T17:01:17.194Z",
        "2020-07-28T23:36:17.929Z",
        "2020-08-01T10:51:36.790Z",
    ],
    currency: "USD",
    locale: "en-US",
};
  
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};
  
const accounts = [account1, account2, account3, account4];

// Display the date in local format.  
// Calculate how many days ago the date is.  
const formatMovementsDate = function(date, locale) {
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    const daysPassed = calcDaysPassed(new Date(), date);
    if(daysPassed === 0) {
        return 'Today';
    }
    else if(daysPassed === 1) {
        return 'Yesterday';
    }
    else if(daysPassed <= 7){
        return `${daysPassed} days ago`;
    }
    else {
        /*
        const day = `${date.getDate()}`.padStart(2, 0);
        const month = `${date.getMonth() + 1}`.padStart(2, 0);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
        */
       return new Intl.DateTimeFormat(locale).format(date);   
    }
}

// Use Intl.NumberFormat() to format the mov (movements array element) with object's currency and object's locale.  
const formatCur = function(value, locale, currency) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency}).format(value);
}

// Create a function expression displayMovements.  
// sort is false by default, if I click on the sort button, sort will set to true and the movements' elements will be sorted.  
// Clear all HTML codes inside the '.movements' HTML element.  
// Use forEach to display a movements array element in each row (as '.movements__row' element) inside the '.movements' element.  
// If mov (element in movements array) > 0, type = 'deposit', otherwise, type = 'withdrawal'.  
// Set class equals 'movements__type--deposit' or 'movements__type--withdrawal' depend on what the type value is.  
// Use insertAdjacentHTML() to add the HTML codes to the start of the '.movements' element.  
const displayMovements = function(acc, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const date = new Date(acc.movementsDates[i]);
        const displayDate = formatMovementsDate(date, acc.locale);
        const formattedMov = formatCur(mov, acc.locale, acc.currency);
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__date">${displayDate}</div>
                <div class="movements__value">${formattedMov}</div>
            </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

// Calculate the sum of all elements in the movements array of an object.  
const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);
    labelBalance.textContent = `${formattedMov}`;
}

// Invoke calcDisplayBalance() using the movements array from account1 object.  
// calcDisplayBalance(account1.movements);

// Get all elements from the movements array where element's value is greater than 0, then sum them up.  
// Calculate all income (labelSumIn), spending (labelSumOut), and interest (labelSumInterest) and display them.  
const calcDisplaySummary = function(acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${formatCur(incomes, acc.locale, acc.currency)}`;
    const spending = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${formatCur(Math.abs(spending), acc.locale, acc.currency)}`;
    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr)=> int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${formatCur(interest, acc.locale, acc.currency)}`;
}

// Invoke calcDisplaySummary() using the movements array from account1 object.  
// calcDisplaySummary(account1.movements);

// console.log(accounts);

// Display all elements in the movements array in  account1 object.  
// displayMovements(account1.movements);

// Use forEach() method to create a property username for each element (object) in the accounts array, username is the initial of owner in lower case.  
const createUsernames = function(accounts) {
    accounts.forEach(function(account) {
        account.username = account.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    });
}

createUsernames(accounts);

// Update the display UI.  
const updateUI = function(acc) {
    displayMovements(acc);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
}

// Set the time to 5 mintues.  
// Call the timer every second.  
// In each call, print the remaining time to the UI, which decreases the time by 1 second.  
// When the time is 0, stop timer and log out user.  
const startLogOutTimer = function() {
    const tick = function() {
        const min = String(Math.trunc(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, '0');;
        labelTimer.textContent = `${min}:${sec}`;
        time--;
        if (time === 0) {
            clearInterval(timer);
            labelWelcome.textContent = 'Log in to get started';
            containerApp.style.opacity = 0;
        }
    }
    let time = 300;
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
}

let currentAccount, timer;

// Fake login, put currentAccount to account1 so I don't have to login all the time.  
/*
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
*/

// Use preventDefault() to prevent the page from being redirected after the form is submitted.  
// Check if the object's username value is equal to inputLoginUser's (input element) value. 
// Then check the currentAccount's (selected object) pin is equal to inputLoginPin's (input element) value.  
// If both username and pin and correct, display a welcome message with the object's owner value, but only displays the first word.  
// Change opacity to 100 so the .app (containerApp) element is visible.  
// Display all movements and summary for the object.  
// Use local formatting style, month/day/year format.  Also, use options object to decide what to display.  
// If there's already a timer, clear the timer, so if I log into a different account, timer resets.  
// Invoke startLogOutTimer() to display the timer.  
btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    if(currentAccount?.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}!`;
        containerApp.style.opacity = 100;
        const now = new Date();
        /*
        const day = `${now.getDate()}`.padStart(2, '0');
        const month = `${now.getMonth() + 1}`.padStart(2, '0'); // Jan is 0, so 0 + 1 = 1, 1 is a better representation for Jan.  
        const year = now.getFullYear();
        const hour = `${now.getHours()}`.padStart(2, '0');
        const min = `${now.getMinutes()}`.padStart(2, '0');
        labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
        */
        const options = {
            hour: 'numeric', 
            minute: 'numeric', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric', 
            weekday: 'long'
        }
        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        if (timer) {
            clearInterval(timer);
        }
        timer = startLogOutTimer();
        updateUI(currentAccount);
    }
});

// Use preventDefault() to prevent the page from being redirected after the form is submitted.  
// Get the receiverAcc's (object) value equal to inputTransferTo's value.  
// Transfer is only made for amount is positive, current balance is greater than or equal to amount, receiver account exists, 
// and receiver account's username is different than current account's username.  
// Current account receive the negative amount while receiver account receive the positive amount.  
// Set the date of the movement to current date and time, push that new date in the movementsDates array for both current and receiver accounts.  
// Reset the timer if I did a transfer.  
btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';
    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        console.log('transfer made');
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        currentAccount.movementsDates.push(new Date());
        receiverAcc.movementsDates.push(new Date());
        updateUI(currentAccount);
        clearInterval(timer);
        timer = startLogOutTimer();
    }
});

// If movements is greater than 0.  
// Checks if amount is positive and if the object's movements array has element that are greater than 10% of amount.  
// Add the amount to the object's movements array if the condition is true.  
// Set the date of the movement to current date and time, push that new date in the movementsDates array for the current account.  
// When we take out a loan, there is a delay of 2.5 seconds.    
// Reset the timer if I did a transfer.  
btnLoan.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Math.floor(Number(inputLoanAmount.value));
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        setTimeout(function() {
            currentAccount.movements.push(amount);
            currentAccount.movementsDates.push(new Date());
            updateUI(currentAccount);            
            clearInterval(timer);
            timer = startLogOutTimer();
        }, 2500);
    }
    inputLoanAmount.value = '';
});

// Remove the object from the accounts array if username and pin matches the input elements.   
// Delete the account and hide UI if the object is removed.  
btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        accounts.splice(index, 1);
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});

// sorted's initial value is false.  
let sorted = false;

// Revert the sort value if I click on the sort button to sort and unsort the movements array's elements.    
btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
})

// If I click on the balance, I will print out all movements as an array.  
labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value')).map(el => Number(el.textContent.replace('€', '')));
    console.log(movementsUI);
});

/*
const user = 'Steven Thomas Williams'; // Username should be stw, the initials in lower case.  
const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
console.log(username);
*/

// CLick on the balance label, I will make every odd numbered rows red, because index starts from 0, so first row is painted red.  
// Every even numbered rows are blue.  
labelBalance.addEventListener('click', function() {
    [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
        if (i % 2 === 0) {
            row.style.backgroundColor = 'orangered';
        } 
        else {
            row.style.backgroundColor = 'cyan';
        }
    });
});

// console.log(new Date(account1.movementsDates[0]));