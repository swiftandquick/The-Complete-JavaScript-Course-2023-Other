// Import everything shoppingCart module, all imports are stored in ShoppingCart object as its properties and methods.  
import * as ShoppingCart from './shoppingCart.js';

console.log("Importing module.");

// Invoke addToCart() using ShoppingCart object.  
ShoppingCart.addToCart('pizza', 2);
ShoppingCart.addToCart('bread', 5);
ShoppingCart.addToCart('apple', 4);
console.log(ShoppingCart.totalPrice);

console.log(ShoppingCart.cart);