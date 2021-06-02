"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = "fanny pack";
const preSale = "true";
const product = products_1.default.filter(product => {
    if (product.name === productName) {
        if (product.preOrder === preSale) {
            console.log("Thank you for your pre-order! We'll let you know as soon as we ship your items.");
        }
        return product;
    }
})[0];
console.log(product);
