/* 
24) Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas.
*/
function calcPrice(factor) {
  let price = kilometers * factor;
  let priceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(price);
  return  priceFormat;
}
let kilometers = parseFloat(prompt(`Enter how many kilometers do you wanna travel:`));

if (kilometers <= 200) {
  let price = calcPrice(0.5);
  document.write(`The price for the ride is ${price}`);
} else {
  let price = calcPrice(0.45);
  document.write(`The price for this ride is ${price}`);
}
