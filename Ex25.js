/*

Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.

*/

const readline = require('readline-sync');

let matriz = [];
let somaColuna = 0;
let contador = 1;

//iniciar matriz de maneira ordenada

for (let i = 0; i < 15; i++){
    matriz[i] = [];
    for (let j = 0; j < 20; j++){
        matriz[i][j] = contador;
        contador++;
    }}

//exibindo a matriz

for (let i = 0; i < 15; i++){
    for (let j = 0; j < 20; j++){
        console.log(matriz[i][j]);
    }
}

//calculando e exibindo a soma de cada coluna

for (let i=0; i < 20; i++){
    somaColuna = 0; //zerando a soma a cada coluna

    for (let j=0; j < 15; j++){
        somaColuna += matriz[j][i];
    }

    console.log(`A soma da coluna ${i+1} é: ${somaColuna}`);
}