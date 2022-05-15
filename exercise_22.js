/* 
22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/
let birthYear = parseInt(prompt(`Enter the your year of birth:`));
let currentDate = new Date();
let age = currentDate.getFullYear() - birthYear;

if (age >= 18) {
  document.write(`You must have get enlisted in the military. it's been ${age - 18} years`);
} else {
  document.write(`${18 - age} years left to enlist in the army`);
}
