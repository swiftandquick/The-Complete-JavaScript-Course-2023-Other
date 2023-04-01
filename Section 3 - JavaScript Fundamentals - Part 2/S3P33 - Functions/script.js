// Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population / 1000000} million people and its capital city is ${capitalCity}.`;
}

console.log(describeCountry("Finland", 5500000, "Helsinki"));
console.log(describeCountry("United States", 331900000, "Washington D.C."));
console.log(describeCountry("China", 1412000000, "Beijing"));


// Function Declarations VS Expressions

function percentageOfWorld1(country, population) {
    return `${country} has ${population / 1000000} million people, so it's about ${population / 7900000000 * 100}% of hte world population.`;
}

console.log(percentageOfWorld1('Finland', 5500000));
console.log(percentageOfWorld1('United States', 331900000));
console.log(percentageOfWorld1('China', 1412000000));

const percentageOfWorld2 = function (country, population) {
    return `${country} has ${population / 1000000} million people, so it's about ${population / 7900000000 * 100}% of hte world population.`;
}

console.log(percentageOfWorld2('Finland', 5500000));
console.log(percentageOfWorld2('United States', 331900000));
console.log(percentageOfWorld2('China', 1412000000));


// Arrow functions.  

const percentageOfWorld3 = (country, population) => {
    return `${country} has ${population / 1000000} million people, so it's about ${population / 7900000000 * 100}% of hte world population.`;
}

console.log(percentageOfWorld3('Finland', 5500000));
console.log(percentageOfWorld3('United States', 331900000));
console.log(percentageOfWorld3('China', 1412000000));


// Functions Calling Other Functions

function describePopulation(country, population) {
    return percentageOfWorld1(country, population);
}

console.log(describePopulation('Finland', 5500000));
console.log(describePopulation('United States', 331900000));
console.log(describePopulation('China', 1412000000));


// Introduction to Arrays  

const populations = [5500000, 331900000, 1412000000, 10500000];

if (populations.length === 4) {
    console.log(true);
}
else {
    console.log(false);
}

console.log(percentageOfWorld1("Finland", populations[0]));
console.log(percentageOfWorld1("United States", populations[1]));
console.log(percentageOfWorld1("China", populations[2]));
console.log(percentageOfWorld1("Sweden", populations[3]));


// Basic Array Operations (Methods)

const neighbors = ['Canada', 'Mexico'];

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log("It's probably not a central European country.");
}

neighbors[0] = 'Canada 2';
console.log(neighbors);


// Introduction to Objects, Object Methods

const myCountry = {
    country: "United States",
    capital: "Washington D.C.",
    language: "English",
    population: 331900000,
    neighbors: ['Canada', 'Mexico'],
    describe: function () {
        return `${this.country} has ${this.population / 1000000} million ${this.language}-speaking people, 
            ${this.neighbors.length} countries and a capital called ${this.capital}.`;
    },
    checkIsland: function () {
        return this.neighbors.length === 0 ? true : false;
    }
}


// Dot VS Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population / 1000000} million ${myCountry.language}-speaking people, 
            ${myCountry.neighbors.length} countries and a capital called ${myCountry.capital}.`);


// Object Methods

console.log(myCountry.describe());
console.log(myCountry.checkIsland());


// The for Loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting.`);
}


// Looping Arrays, Breaking, and Continuing.  

const populations2 = [5500000, 331900000, 1412000000, 10500000];

const percentages2 = [];

function percentage(population) {
    return `${population / 7900000000 * 100}%`;
}

for (let i = 0; i < populations2.length; i++) {
    percentages2.push(percentage(populations2[i]));
}

console.log(percentages2);


// Looping Backwards and Loops in Loops

const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let k = 0; k < listOfNeighbors[i].length; k++) {
        console.log(listOfNeighbors[i][k]);
    }
}


// The while Loop

const percentages3 = [];

let i = 0;
while (i < populations2.length) {
    percentages3.push(percentage(populations2[i]));
    i++;
}

console.log(percentages3);