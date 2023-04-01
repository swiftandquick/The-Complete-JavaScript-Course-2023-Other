import { addToCart, totalPrice as price, totalQuantity as qty, cart } from './shoppingCart.js';

// Import cloneDeep (default function) from cloneDeep.js, which is inside lodash-es folder.  
import cloneDeep from 'lodash-es/cloneDeep.js';

console.log("Importing module.");

console.log(price, qty);

addToCart('pizza', 2);
addToCart('bread', 5);
addToCart('apple', 4);

console.log(cart);

// Create a state object.  
const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5}    
    ],
    user: {loggedIn: true}
}

// Using theh cloneDeep() method imported from lodash-es, I can copy properties from one object to another.  
// If the property from the original object changes, the newly created object's property stays the same.  
// Here, state's user.loggedIn property is changed to false, but stateDeep's user.loggedIn is still true.  
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(stateDeepClone);

// Whenever we change change one of the modules, it trigger a rebuild.  
// The new modified bundle will automatically get injected into the browser without triggering a whole page reload.  
// Only Parcel understands the following code, it will not make it to the final bundle as the browser doesn't understand it.  
if(module.hot) {
    module.hot.accept();
}

// Create a class, which is only available in ES6, which will be converted to ES5 in script.75da7f30.js.
class Person {
    greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting}, ${this.name}!`);
    }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js';
import 'regenerator-runtime/runtime';