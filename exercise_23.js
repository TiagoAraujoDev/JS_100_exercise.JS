/* 
23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/
function discount(discountFactor) {
  return price * discountFactor;
}
function priceFormat(value) {
  let formated = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return formated;
}

let name = prompt(`What's your name?`);
let price = parseFloat(prompt(`Enter the price:`));
let sex = prompt(`Enter your gender:`);

let sexMan = sex.toLocaleUpperCase().startsWith('M');
let sexWom = sex.toLocaleUpperCase().startsWith('F');

if (sexMan) {
  let priceWithDiscount = discount(0.95);
  let discountForMan = priceFormat(priceWithDiscount);
  document.write(`Hello ${name}, the price with discount is: ${discountForMan}.`);
} else if (sexWom) {
  let priceWithDiscount = discount(0.85);
  let discountForWon = priceFormat(priceWithDiscount);
  document.write(
    `Congratulations ${name}! The price with discount is: ${discountForWon}`
  );
} else {
  document.write(`Invalid Gender!`);
}
