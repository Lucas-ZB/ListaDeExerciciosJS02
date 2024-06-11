/*

Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.

*/

const prompt = require('prompt-sync')();

let funcionario = {
    nome: prompt('Nome: '),
    cargo: prompt('Cargo: '),
    salario: Number(prompt('Salário: '))
};

console.log(funcionario);

