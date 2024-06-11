/*

Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.

*/

const prompt = require('prompt-sync')();

let vetor = [];

for (let i = 0; i < 15; i++) {
    if (i === 0 || i === 1) {
        vetor[i] = 1;
    } else {
        vetor[i] = vetor[i - 1] + vetor[i - 2];
    }
}

console.log(vetor);