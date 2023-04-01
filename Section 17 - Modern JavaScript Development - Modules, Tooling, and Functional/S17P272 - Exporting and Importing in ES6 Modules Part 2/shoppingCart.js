console.log("Exporting module");

const shippingCost = 10;
export const cart = [];

// Add an object to the cart() array. 
// Export the addToCart() function.   
export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart.`);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };