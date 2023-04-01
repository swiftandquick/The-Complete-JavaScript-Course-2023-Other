// ShoppingCart2 contains an object that is returned from an unnamed function that is initially invoked once.  
const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart.  Shipping cost is $${shippingCost}.`);
    }    
    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier.`);
    }
    return { addToCart, cart, totalPrice, totalQuantity };
})();

// We can functions that are defined inside ShoppingCart2().  
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

console.log(ShoppingCart2);

// I cannot use individual variables that are defined inside the shoppingCart2() function.  
console.log(ShoppingCart2.shippingCost);