/* 
10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
*/
let wallHeight = Number(prompt(`Enter the height:`))
let wallWidth = Number(prompt(`Enter the wall width:`))

let wallArea = wallHeight * wallWidth
let inkQuantity = wallArea / 2

document.write(`
  To paint a wall with ${wallArea}m^2 you must have ${inkQuantity}liters of ink.
`)
