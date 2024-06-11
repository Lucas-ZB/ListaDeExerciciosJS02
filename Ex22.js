/*

A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.

*/

const prompt = require('prompt-sync')();

let salarios = [];
let filhos = [];
let salarioTotal = 0;
let filhosTotal = 0;
let maiorSalario = 0;
let salarioAte350 = 0;

while (true) {
    let salario = Number(prompt('Salário: '));

    if (salario === 0) {
        break;
    }

    let filhos = Number(prompt('Número de filhos: '));

    salarios.push(salario);
    filhos.push(filhos);

    salarioTotal += salario;
    filhosTotal += filhos;

    if (salario > maiorSalario) {
        maiorSalario = salario;
    }

    if (salario <= 350) {
        salarioAte350++;
    }
}

let mediaSalario = salarioTotal / salarios.length;
let mediaFilhos = filhosTotal / filhos.length;
let percentualSalarioAte350 = (salarioAte350 / salarios.length) * 100;

console.log(mediaSalario);