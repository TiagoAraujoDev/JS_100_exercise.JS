/* 
6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
Ex:
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10
*/
let number = Number(prompt(`Enter a number:`))

let predecessor = number - 1
let successor = number + 1

document.write(`The predecessor of ${number} is ${predecessor} and the successor is ${successor}`)
