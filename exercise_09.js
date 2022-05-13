/* 
9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,17.
*/
let valueBRL = Number(prompt(`Enter a value in BRL:`))

let valueUSD = valueBRL / 5.17
let formatValueUSD = Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'}).format(valueUSD)

document.write(`You have ${formatValueUSD} `)
