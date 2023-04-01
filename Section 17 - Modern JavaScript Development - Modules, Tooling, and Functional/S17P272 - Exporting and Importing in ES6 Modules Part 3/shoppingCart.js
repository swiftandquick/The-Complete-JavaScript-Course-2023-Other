console.log("Exporting module");

const shippingCost = 10;
const cart = [];

// Add an object to the cart() array. 
// Export a default function without name function.   
export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart.`);
}