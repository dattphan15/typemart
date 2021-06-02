import products from './products';

const productName: string = "fanny pack";
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
      return product;
  }

})[0];

console.log(product);