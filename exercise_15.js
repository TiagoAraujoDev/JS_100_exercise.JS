/* 
15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada.
*/
let daysWorked = parseInt(prompt(`Enter the number of days worked:`));

let salary = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format((25 * 8) * daysWorked);

document.write(`Your salary is ${salary}`);
