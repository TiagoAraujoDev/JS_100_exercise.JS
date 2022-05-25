/* 29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20% */
const employee = {
  name: null,
  wage: null,
  workTime: null,
  newWage: function (tax) {
    return this.wage * tax;
  }
};
employee.name = 'Jonh Doe';
employee.wage = 1000;
employee.workTime = 20;
if (employee.workTime <= 3) {
  let newSalary = employee.newWage(1.03);
  console.log(
    `${employee.name} is working here for ${
      employee.workTime
    }. His new wage is ${Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(newSalary)}!`
  );
} else if (employee.workTime > 3 && employee.workTime < 10) {
  let newSalary = employee.newWage(1.125);
  console.log(
    `${employee.name} is working here for ${
      employee.workTime
    }. His new wage is ${Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(newSalary)}!`
  );
} else {
  let newSalary = employee.newWage(1.2);
  console.log(
    `${employee.name} is working here for ${
      employee.workTime
    }. His ne wage is ${Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(newSalary)}!`
  );
}
