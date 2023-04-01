'use strict';

/*
function convert(underscore_case) {
    const ucArray = underscore_case.split('_');
    const ccArray = [];
    ccArray.push(ucArray[0].toLowerCase());
    for (let i = 1; i < ucArray.length; i++) {
        ccArray.push(ucArray[i][0].toUpperCase() + ucArray[i].slice(1).toLowerCase());
    }
    return ccArray.join('');
}

console.log(convert('underscore_case'));
console.log(convert('first_name'));
console.log(convert('Some_Variable'));
console.log(convert('calculate_AGE'));
console.log(convert('delayed_departure'));
*/

// Input:  
/*
underscore_case
  first_name
Some_Variable
   calculate_AGE
delayed_departure
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    console.log(convert(text));
});

function convert(text) {
    const textArray = text.split('\n');
    const finalTextArray = [];
    for(let i = 0; i < textArray.length; i++) {
        const ucArray = textArray[i].split('_');
        const ccArray = [];
        ccArray.push(ucArray[0].toLowerCase());
        for (let i = 1; i < ucArray.length; i++) {
            ccArray.push(ucArray[i][0].toUpperCase() + ucArray[i].slice(1).toLowerCase());
        }
        let camelCase = `${ccArray.join('').trim().padEnd(20, ' ')}${'✅'.repeat(i + 1)}`;
        finalTextArray.push(camelCase);
    }
    return finalTextArray.join('\n');
}