/*

Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].

*/

const readline = require('readline-sync');

let matrizA = [];
let matrizB = [];
let matrizP = [];
let contadorA = 1;
let contadorB = 2;

//iniciar matriz de maneira ordenada

for (let i = 0; i < 3; i++){
    matrizA[i] = [];
    matrizB[i] = [];
    matrizP[i] = [];
    for (let j = 0; j < 5; j++){
        matrizA[i][j] = contadorA;
        matrizB[i][j] = contadorB;
        contadorA++;
        contadorB++;
        //Inicia a matri P com 0
        matrizP[i][j] = 0;
    }}

//exibindo a matriz A

console.log('Matriz A:');
for (let i = 0; i < 3; i++){
    let linha = '';
    for (let j = 0; j < 5; j++){
        linha += matrizA[i][j] + '';
    }
    console.log(linha);
}

//exibindo a matriz B

console.log('Matriz B:');
for (let i = 0; i < 3; i++){
    let row = '';
    for (let j = 0; j < 5; j++){
        row += matrizB[i][j] + '';
    }
    console.log(row);
}

//calculando e exibindo a matriz P

console.log('Matriz P:');
for (let i=0; i < 3; i++){
    for (let j=0; j < 5; j++){
        matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
    }
}

//exibindo a matriz P  

console.log('Matriz P:');

for (let i = 0; i < 3; i++){
    let linha = '';
    for (let j = 0; j < 5; j++){
        linha += matrizP[i][j] + '';
    }
    console.log(linha);
}

