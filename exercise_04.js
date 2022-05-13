/* 
4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
entre eles.
Ex:
Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13. 
*/
let num1 = Number(prompt(`Enter a value:`))
let num2 = Number(prompt(`Enter another value:`))

let sum = num1 + num2

document.write(`The sum between ${num1} and ${num2} is ${sum}!`)
