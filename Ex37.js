/*

Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.

*/

const readline = require('readline-sync');

let gabarito = [];
let alunos = [];
let acertos = 0;

for (let i = 0; i < 20; i++) {
    gabarito.push(readline.question(`Digite o gabarito da questão ${i + 1}: `));
}

for (let i = 0; i < 50; i++) {
    let aluno = {
        respostas: []
    };

    for (let j = 0; j < 20; j++) {
        aluno.respostas.push(readline.question(`Digite a resposta da questão ${j + 1}: `));
    }

    alunos.push(aluno);
}

for (let i = 0; i < 50; i++) {
    acertos = 0;
    for (let j = 0; j < 20; j++) {
        if (alunos[i].respostas[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`O aluno ${i + 1} acertou ${acertos} questões.`);

    if (acertos >= 12) {
        console.log('APROVADO');
    } else {
        console.log('REPROVADO');
    }
}



