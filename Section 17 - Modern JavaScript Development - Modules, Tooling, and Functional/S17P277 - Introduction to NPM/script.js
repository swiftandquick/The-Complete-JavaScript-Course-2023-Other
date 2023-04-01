// Import cloneDeep (default function) from cloneDeep.js, which is inside lodash-es folder.  
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// Create a state object.  
const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5}    
    ],
    user: {loggedIn: true}
}

// While I only change the user.loggedIn property for state to false, the user.loggedIn property for stateClone also changed to false.  
/*
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(state);
console.log(stateClone);
*/

// Using theh cloneDeep() method imported from lodash-es, I can copy properties from one object to another.  
// If the property from the original object changes, the newly created object's property stays the same.  
// Here, state's user.loggedIn property is changed to false, but stateDeep's user.loggedIn is still true.  
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(stateDeepClone);
