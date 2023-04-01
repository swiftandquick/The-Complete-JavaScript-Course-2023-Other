/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value));
*/

// Generate a random number between 1 to 20.  
let secretNumber = Math.trunc((Math.random() * 20) + 1);

// Set initial score to 20.  
let score = 20;

// Set initial highscore 0.  
let highscore = 0;

// Display the random number.  
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Add an event to the button element with 'check' class.  
// If the button is clicked, display the value of the input element as a number.  
// If the value of the input is an empty string, then display a message "No numbers!".  
// Compare the input is to secretNumber, then display a message depend on whether the input value is equal to, greater than, or less than secretNumber.  
// Subtract a point if guess is incorrect, display the new score.  
// If score is 0, display "You lost the game!" and disable the btuton.  
// Change the background to green, double the "number" class element's width, and disable the button if I win.  
// If score > highscore, display the score as the new highscore.   
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        displayMessage('No number!');
    }
    else if (guess === secretNumber) {
        displayMessage('Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.check').disabled = true;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'Your lost the game!';
            score = 0;
            document.querySelector('.score').textContent = score;
            document.querySelector('.check').disabled = true;
        }
    }
});

// Reset everything is I click on the "again" button.  
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc((Math.random() * 20) + 1);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').disabled = false;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
});