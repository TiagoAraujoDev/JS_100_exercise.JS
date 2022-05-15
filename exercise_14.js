/* 
14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
*/
let rantedDays = parseInt(prompt(`For how many days you rented the car?`));
let km = parseFloat(prompt(`How many Km did you traveled?`));

let price  = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format((rantedDays * 90) + (0.2 * km));

document.write(`The price for the rent is: ${price}`)