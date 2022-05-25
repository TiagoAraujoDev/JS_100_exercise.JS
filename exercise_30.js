/* 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
de triângulo será formado:
- EQUILÁTERO: todos os lados iguais
- ISÓSCELES: dois lados iguais
- ESCALENO: todos os lados diferentes */
let line1 = 5;
let line2 = 4;
let line3 = 3;

let isTriangle =
  line1 < line2 + line3 && line2 < line1 + line3 && line3 < line2 + line1;

if (isTriangle) {
  if (line1 == line2 && line2 == line3) {
    console.log(`Is triangle and Equilatero`);
  } else if (line1 == line2 || line2 == line3 || line1 == line3) {
    console.log(`Is triangle and Isoceles`);
  } else {
    console.log(`Is triangle and escaleno`);
  }
} else {
  console.log(`isn't triangle`);
}
