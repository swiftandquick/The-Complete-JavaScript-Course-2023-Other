const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions.  
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

// Initially call init().  
init();

const switchPlayer = function() {
    // Set the current player's score to 0.  
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // If the activePlayer is 0, set it to 1, else, set it to 0.  
    activePlayer = activePlayer === 0 ? 1 : 0;
    // If the player--active class exists, remove it, otherwise, add it.  
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality.  
btnRoll.addEventListener('click', function() {
    // The roll dice function only works if playing is true.  
    if (playing) {
        // Generate a random dice roll. 
        const dice = Math.trunc((Math.random() * 6) + 1);
        // Display the dice.  
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // Check if dice is 1, switch to next player if that's the case, otherwise add dice to current score.  
        if(dice !== 1) {
            currentScore += dice;
            // Retrieve the element of the activePlayer, then change its text content to currentScore.  
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});

// Hold functionality.  
btnHold.addEventListener('click', function() {
    if (playing) {
        // Add current score to the active player's score.  
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // Check if the player's score is >= 100.  Add the player-winner class and remove the player-active class if that's the case.  
        if (scores[activePlayer] >= 100) {
            // Set playing to false.  
            playing = false;
            // Hide the dice element.  
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            // Switch to the other player.  
            switchPlayer();
        }
    }
});

// Reset everything is if Click on btnNew element.  
btnNew.addEventListener('click', init);