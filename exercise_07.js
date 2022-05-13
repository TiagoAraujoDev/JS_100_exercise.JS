/* 
7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte.
Ex:
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666
*/

let number = Number(prompt(`Entar a number:`))

let numberDouble = number * 2
let numberHalf = number / 3

document.write(`Double of ${number} is ${numberDouble} and it's third part is ${numberHalf}!`)
