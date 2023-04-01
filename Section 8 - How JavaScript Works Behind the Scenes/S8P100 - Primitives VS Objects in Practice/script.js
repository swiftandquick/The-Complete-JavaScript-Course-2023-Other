let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Both jessica and marriedJessica point to the same object in the heap, so if one object changes, the other one changes as well.  
const jessica = {
    firstName: 'Jessica', 
    lastName: 'Williams', 
    age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Object.assign() method creates a new object with all the properties of jessica2.  
// Now, there are two different objects are defined in the heap, so if jessicaCopy changes, jessica2 will stay the same.  
// Object.assign doesn't work if there's an inner object (that includes an array).  
// The array in both jessica2 and jessicaCopy point to the same address in the heap, so if array in jessicaCopy changes, it also changes in jessica2 as well.  
// Both jessica2.family and jessicaCopy.family have an inner object (array) that points to the same address in the heap.  
const jessica2 = {
    firstName: 'Jessica', 
    lastName: 'Williams', 
    age: 27, 
    family: ['Alice', 'Bob']
}
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);