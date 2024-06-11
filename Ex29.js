/*

Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz

*/

const readline = require('readline-sync');

let matriz = [];
let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonal = 0;
let somaTotal = 0;

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
    somaLinha4 += matriz[3][i];
    somaColuna2 += matriz[i][1];
    somaDiagonal += matriz[i][i];
    for (let j = 0; j < 5; j++){
        somaTotal += matriz[i][j];
    }
}

console.log('Soma da linha 4: ' + somaLinha4);
console.log('Soma da coluna 2: ' + somaColuna2);
console.log('Soma da diagonal principal: ' + somaDiagonal);
console.log('Soma total: ' + somaTotal);

