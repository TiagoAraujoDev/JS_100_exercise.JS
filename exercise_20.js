/* 
20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
ÍMPAR.
*/
let number = parseInt(prompt(`Enter a number:`));
if (number % 2 == 0) {
  document.write(`This number is even`);
} else {
  document.write(`This number is odd.`);
}