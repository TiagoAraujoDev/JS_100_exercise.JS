/* 
13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.
*/
let salary = parseFloat(prompt(`What's your salary?`));

let newSalary = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(salary * 1.15);

document.write(`The new salary is: ${newSalary}`);
