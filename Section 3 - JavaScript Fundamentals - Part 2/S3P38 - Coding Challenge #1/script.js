const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        return `Dolphins win (${avgDolphins} VS ${avgKoalas})`;
    }
    else if (avgDolphins < avgKoalas) {
        return `Koalas win (${avgDolphins} VS ${avgKoalas})`;
    }
    else {
        `Draw (${avgDolphins} VS ${avgKoalas})`;
    }
}

console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));