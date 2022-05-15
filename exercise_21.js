/* 
21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO.
*/
let year = parseInt(prompt(`Enter the year:`));

let isBisexto = year % 400 == 0 || year % 4 == 0;
let notBisexto = year % 4 == 0 && year % 100 == 0 && year % 400 != 0;

if (notBisexto) {
  document.write(`This year isn't leap year`);
} else if (isBisexto) {
  document.write(`This year is leap year`);
} else {
  document.write(`This year isn't leap year`);
}
