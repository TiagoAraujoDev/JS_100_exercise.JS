/* 
12) Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.
*/
let productPrice = parseFloat(prompt(`What's the price:`));

let discountPrice = productPrice * 1.05;

document.write(`The new price is: ${discountPrice}`);
