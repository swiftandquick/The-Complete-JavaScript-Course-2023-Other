// Values and variables

let country = "United States";
let continent = "North America";
let population = 331900000;

console.log("Country: ", country);
console.log("Continent: ", continent);
console.log("Population: ", population);


// Data types

let isIsland = false;
console.log("Is Island: ", isIsland);


// let, const, and var

const language = "English";
console.log("Language: ", language);


// Basic Operators

const halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

console.log(population > 6000000);
console.log(population > 33000000);

console.log(country + " is in " + continent + " and its " + (population / 1000000) + " million people speak " + language + ".  ");


// String and Template Literals

console.log(`${country} is in ${continent} and its ${population / 1000000} million people speak ${language}.`);


// Taking Decisions:  if / else Statements

if (population > 33000000) {
    console.log(`${country}'s population of ${population / 1000000} is above average.`);
}
else {
    console.log(`${country}'s population of ${population / 1000000} is below average.`);
}


// Type conversion and coercion.  
console.log('9' - '5'); // 4.  
console.log('19' - '13' + '17'); // 617.  
console.log('19' - '13' + 17); // 23.  
console.log('123' < 57); // false.  
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143.  


// Equality Operators:  == VS ===
/*
const numNeighbours = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
}
else {
    console.log('No borders');
}
*/


// Logical Operators

if (language === 'English' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}.`);
}
else {
    console.log(`${country} does not meet your criteria.`);
}


// The switch Statement

switch (language) {
    case 'Chinese':
        console.log("MOST number of native speakers!");
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}


// The Conditional (Ternary) Operator

population > 33000000 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below age.`);