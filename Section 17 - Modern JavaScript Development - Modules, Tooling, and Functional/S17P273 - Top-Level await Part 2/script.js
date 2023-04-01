// Import functions and variables from shoppingCart module.  
import { addToCart, totalPrice as price, totalQuantity as qty, cart } from './shoppingCart.js';

console.log("Importing module.");

console.log(price, qty);

addToCart('pizza', 2);
addToCart('bread', 5);
addToCart('apple', 4);

console.log(cart);

// Retrieve the title and body properties of the last object from the data and create a new object with it.  
// Return a promise that contains the newly created object.  
const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {title: data.at(-1).title, text: data.at(-1).body};
};

const lastPost = getLastPost();
console.log(lastPost); // Promise.  

// Use the then() method to retrieve the response object, last is the response object, which contains the newly created object from getLastPost() function.  
lastPost.then(last => console.log(last));

// I can use the await keyword to get the newly created object instead of a Promise from getLastPost(), 
// because await keyword helps to return the response object instead of the Promise itself.  
const lastPost2 = await getLastPost();
console.log(lastPost2); // Object.  
