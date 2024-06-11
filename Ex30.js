/*

Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.

*/

const readline = require('readline-sync');

let matriz = [];
let SL = [];
let SC = [];

for (let i = 0; i < 5; i++){
    matriz[i] = [];
    for (let j = 0; j < 5; j++){
        matriz[i][j] = parseInt(readline.question('Digite um número: '));
    }
}

console.log('Matriz:');

for (let i = 0; i < 5; i++){
    let linha = '';
    for (let j = 0; j < 5; j++){
        linha += matriz[i][j] + ' ';
    }
    console.log(linha);
}

for (let i = 0; i < 5; i++){
    SL[i] = 0;
    SC[i] = 0;
    for (let j = 0; j < 5; j++){
        SL[i] += matriz[i][j];
        SC[i] += matriz[j][i];
    }
}

console.log('Vetor SL:');
console.log(SL);
console.log('Vetor SC:');
console.log(SC);

