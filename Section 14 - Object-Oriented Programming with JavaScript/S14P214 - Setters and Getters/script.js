'use strict';

// Create an object (account), with getter and setter.  
// Getter and setter have the same name, which is latest.  
// Getter retrieves the last element of the the movements array.  
// Setter creates a new element as the last element of the movements array.   
const account = {
    owner: 'Jonas', 
    movements: [200, 530, 120, 300], 
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest); // Invokes getter, gets the last element of the movements array.  .  

account.latest = 50; // Invokes setter, puts 50 as last element of movements array.  

console.log(account.movements);

// Getter inside a class, age is use to calculate the age by year 2037.  
// Setter to set the full name, if there's a space in the argument, then set the fullName value to the new value, otherwise, prop up an alert.  
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    get age() {
        return 2037 - this.birthYear;
    }
    set fullName2(name) {
        if(name.includes(" ")) {
            this.fullName = name;
        }
        else {
            alert(`${name} is not a full name.`);
        }
    }
    get fullName2() {
        return this.fullName;
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica.age);
console.log(jessica);

// Use setter to change fullName to 'Jessica Baker'.  
// Use getter to retrieve the fullName value.  
jessica.fullName2 = "Jessica Baker";
console.log(jessica.fullName2);

const walter = new PersonCl('Walter White', 1965);
console.log(walter.age);
console.log(walter.fullName2);