/*

Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).

*/

const prompt = require('prompt-sync')();

let funcionarios = [];

for (let i = 0; i < 79; i++) {
    let funcionario = {
        matricula: prompt('Matrícula: '),
        nome: prompt('Nome: '),
        salario: Number(prompt('Salário bruto: '))
    };

    funcionario.deducaoINSS = funcionario.salario * 0.12;
    funcionario.salarioLiquido = funcionario.salario - funcionario.deducaoINSS;

    funcionarios.push(funcionario);
}

for (let i = 0; i < 79; i++) {
    console.log(funcionarios[i].matricula);
    console.log(funcionarios[i].nome);
    console.log(funcionarios[i].salario);
    console.log(funcionarios[i].deducaoINSS);
    console.log(funcionarios[i].salarioLiquido);
}

