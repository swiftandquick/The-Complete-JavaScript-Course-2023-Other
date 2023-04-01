'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};

for (let [i, scorer] of game.scored.entries()) {
    console.log(`Goal ${i + 1}:  ${scorer}.`);
}

let sum = 0;
const odds = Object.values(game.odds);
for (let odd of odds) {
    sum = sum + odd;
}
const average = sum / odds.length;
console.log(average);

console.log(`Odd of victory ${game.team1}:  ${game.odds.team1}.`);
console.log(`Odd of draw:  ${game.odds.x}.`);
console.log(`Odd of victory ${game.team2}:  ${game.odds.team2}.`);

const scorersArray = Object.values(game.scored);

const scorers = {}

for (let scorer of scorersArray) {
    if (!scorers[scorer]) {
        scorers[scorer] = 1;
    }
    else {
        scorers[scorer] = scorers[scorer] + 1;
    }
}

console.log(scorers);