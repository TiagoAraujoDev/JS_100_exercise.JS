/* 28) Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP */
let width = 10;
let height = 5;

let areaTotal = width * height;

if (areaTotal < 100) {
  console.log(`The area has a size of ${areaTotal}m2. Low cost!`);
} else if (areaTotal >= 100 && areaTotal <= 500) {
  console.log(`The area has a size of ${areaTotal}m2. Average cost!`);
} else {
  console.log(`The area has a size of ${areaTotal}m2. High cost!`);
}
