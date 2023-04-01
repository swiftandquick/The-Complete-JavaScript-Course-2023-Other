// Import functions and variables from shoppingCart module.  
import { addToCart, totalPrice as price, totalQuantity as qty } from './shoppingCart.js';

console.log("Importing module.");

addToCart("bread", 5);
console.log(price, qty);