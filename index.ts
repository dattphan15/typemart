import products from './products';

const productName: string = "shirt";
const preSale: string = "true";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = '575 Broadway, New York City, New York';

const product = products.filter(product => {
  if (product.name === productName) { 
    if (product.preOrder === preSale) { 
      console.log("Thank you for your pre-order! We'll let you know as soon as we ship your items.")
    }
    if (Number(product.price) >= 25) {
      shipping = 0;
      console.log("You qualify for free shipping.")
    }
    if (Number(product.price) < 25) {
      shipping = 5;
    }
    if (shippingAddress.match('New York')) {
      taxPercent = 0.1;
    } else {
      taxPercent = 0.05;
    }
    taxTotal = Number(product.price) * taxPercent;
    total = Number(product.price) + taxTotal + shipping;
    console.log(`
    Product: ${product.name}
    Address: ${shippingAddress}
    Price: ${product.price}
    Tax: ${taxTotal.toFixed(2)}
    Shipping: ${shipping.toFixed(2)}
    Total: ${total.toFixed(2)}
    `);
    return product;
  }

})[0];

console.log(product);