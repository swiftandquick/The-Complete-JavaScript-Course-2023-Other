console.log("Exporting module");

// Top-level await will be executed in script.js.  
console.log('Start fetching users.');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users.');

const shippingCost = 10;
const cart = [];

// Add an object to the cart() array. 
// Export the addToCart() function.   
export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart.`);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity, cart };