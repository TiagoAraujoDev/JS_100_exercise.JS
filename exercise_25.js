/* 
25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.
*/

let line1 = 5//parseFloat(prompt(`Enter the first value:`));
let line2 = 4//parseFloat(prompt(`Enter the second value:`));
let line3 = 3//parseFloat(prompt(`Enter the third value:`));

let isTriangle = line1 < line2 + line3 && line2 < line1 + line3 && line3 < line2 + line1;

if (isTriangle) {
  console.log(`is triangle`);
} else {
  console.log(`isn't triangle`);
}