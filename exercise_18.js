/* 
18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.
*/
let bornYear = parseInt(prompt(`Enter the year you were born:`));
let date = new Date();
let age = parseInt(date.getFullYear()) - bornYear;

if (age >= 16) {
  document.write(`You are ${age} years old and can vote!`);
} else {
  document.write(`You are ${age} years old and can't vote!`);
}
