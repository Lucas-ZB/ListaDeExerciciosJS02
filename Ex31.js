/*

Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.

*/

const readline = require('readline-sync');

let A = parseInt(readline.question('Digite um número inteiro: '));
let V = [];
let X = [];
let contador = 0;

for (let i = 0; i < 30; i++){
    V[i] = [];
    for (let j = 0; j < 30; j++){
        V[i][j] = parseInt(readline.question('Digite um número inteiro: '));
        if (V[i][j] == A){
            contador++;
        }
    }
}

console.log('Matriz V:');

for (let i = 0; i < 30; i++){
    let linha = '';
    for (let j = 0; j < 30; j++){
        linha += V[i][j] + ' ';
    }
    console.log(linha);
}

let k = 0;

for (let i = 0; i < 30; i++){
    for (let j = 0; j < 30; j++){
        if (V[i][j] != A){
            X[k] = V[i][j];
            k++;
        }
    }
}

console.log('Quantidade de valores iguais a A: ' + contador);
console.log('Matriz X:');
console.log(X);

