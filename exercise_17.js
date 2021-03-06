/* 
17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/
let speed = parseFloat(prompt(`Enter the speed:`));
let ticketValue = Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
}).format((speed - 80) * 5);

if (speed > 80) {
  document.write(`You are over speed! The tikcet value is ${ticketValue}.`);
} else {
  document.write(`Drive safe!`);
}
