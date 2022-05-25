/* 26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais */

let numberOne = 2;
let numbertwo = 2;

if (numberOne > numbertwo) {
  console.log(`Number ${numberOne} is bigger than ${numbertwo}!`);
} else if (numbertwo > numberOne) {
  console.log(`Number ${numbertwo} is bigger than ${numberOne}!`);
} else {
  console.log(`${numberOne} and ${numbertwo} are equal!`);
}
