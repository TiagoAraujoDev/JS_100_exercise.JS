/* 
19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0).
*/
function averageCalc(n1, n2) {
  return (n1 + n2) / 2;
} 
let studentName = prompt(`What's your name?`);
let grade1 = parseFloat(prompt(`Enter the first grade:`));
let grade2 = parseFloat(prompt(`Enter the second grade:`));
let averageGrade = averageCalc(grade1, grade2);
if (averageGrade > 7) {
  document.write(`${studentName}, you're above average. Good job!`);
} else {
  document.write(`${studentName}, you're bellow average.Work Hard!`);
}
