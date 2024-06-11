/*

Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.

*/

const readline = require('readline-sync');

let matriz = [];
let maior = 0;

for (let i = 0; i < 12; i++){
    matriz[i] = [];
    for (let j = 0; j < 13; j++){
        matriz[i][j] = parseInt(readline.question('Digite um número: '));
    }
}

console.log('Matriz:');

for (let i = 0; i < 12; i++){
    let linha = '';
    for (let j = 0; j < 13; j++){
        linha += matriz[i][j] + ' ';
    }
    console.log(linha);
}

for (let i = 0; i < 12; i++){
    maior = Math.max(...matriz[i]);
    for (let j = 0; j < 13; j++){
        matriz[i][j] = matriz[i][j] / maior;
    }
}

console.log('Matriz modificada:');
for (let i = 0; i < 12; i++){
    let linha = '';
    for (let j = 0; j < 13; j++){
        linha += matriz[i][j] + ' ';
    }
    console.log(linha);
}

