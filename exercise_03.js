/* 
Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
*/
let employeeSalary 

let fullName = prompt(`What's your name?`)
let salaryFormat = Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(prompt(`What's your salary?`))

document.write(`
  Employee name: ${fullName}<br>
  Wage: ${salaryFormat}<br>
  The employee ${fullName} has a salary of ${salaryFormat} per month!
`)
