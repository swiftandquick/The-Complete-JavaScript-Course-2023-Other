// Import functions and variables from shoppingCart module.  
import { addToCart, totalPrice as price, totalQuantity as qty, cart } from './shoppingCart.js';

console.log("Importing module.");

console.log(price, qty);

addToCart('pizza', 2);
addToCart('bread', 5);
addToCart('apple', 4);

console.log(cart);

console.log("Start fetching...");

// Modules have top-level await, which means I can use the await keyword on its own, outside of async function.  
// However, codes below the codes with await keyword will have to wait until the codes with await keyword finish executing.  
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);

console.log('After fetching...');