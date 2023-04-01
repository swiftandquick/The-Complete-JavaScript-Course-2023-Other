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

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
const [ gk, ...fieldPlayers ] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;

console.log(players1);
console.log(players2);
console.log(gk);
console.log(fieldPlayers);
console.log(allPlayers);
console.log(players1Final);
console.log(team1, draw, team2);

function printGoals(...scorers) {
    let goals = 0;
    for (const scorer of scorers) {
        console.log(`${scorer} scored a goal!`);
        goals++;
    }
    console.log(`Total goals:  ${goals}.`);
}

printGoals(...game.scored);

// For && operator, if first operand returns true, second operand will execute.  
team1 < team2 && console.log('Team 1 is more likely to win!');
team1 > team2 && console.log('Team 2 is more likely to win!');