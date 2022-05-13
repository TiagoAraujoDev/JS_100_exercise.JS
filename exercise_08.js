/* 
8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1857.2dm
1.8572Hm
18572.0cm
18.572Dam
185720.0mm
*/
let distanceInMeters = Number(prompt(`Enter a distance in meters:`))

let distanceInKm = distanceInMeters / 1000
let distanceInHm = distanceInMeters / 100
let distanceInDam = distanceInMeters / 10
let distanceInDm = distanceInMeters * 10
let distanceInCm = distanceInMeters * 100
let distanceInMm = distanceInMeters * 1000
document.write(`
  The distance of ${distanceInMeters} is equal to:<br>
  ${distanceInCm}cm<br>
  ${distanceInDam}Dam<br>
  ${distanceInDm}dm<br>
  ${distanceInHm}Hm<br>
  ${distanceInKm}Km<br>
  ${distanceInMm}mm<br>
`)
