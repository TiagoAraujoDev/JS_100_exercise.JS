/* 27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO */

const student = {
  grade1: null,
  grade2: null,
  media: function () {
    return (this.grade1 + this.grade2) / 2;
  }
};
student.grade1 = 2;
student.grade2 = 1;
let studentAverage = student.media();
if (studentAverage <= 4.9) {
  console.log(`You fail! ${studentAverage} is your average.`);
} else if (studentAverage > 5.0 && studentAverage < 6.9) {
  console.log(
    `You're going to summer class! ${studentAverage} is your average.`
  );
} else {
  console.log(`You succeed! ${studentAverage} is your average.`);
}
