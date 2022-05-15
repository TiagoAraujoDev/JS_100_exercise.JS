/* 
11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta.
*/
alert(`
================================
        Delta calculo
================================
`);
let A = parseFloat(prompt(`Enter the value of a:`));
let B = parseFloat(prompt(`Enter the value of b:`));
let C = parseFloat(prompt(`Enter the value of c:`));

let delta = Math.sqrt(B ** 2 - (4 * A * C));

document.write(`
The value of delta is: ${delta.toFixed(2)}
`);
