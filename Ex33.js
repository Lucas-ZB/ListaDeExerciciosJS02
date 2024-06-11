/*

Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.


*/

const readline = require ('readline-sync');

let matriz = [];
let valor = 1;


for (let i = 0; i < 3; i++){
    let linha = [];
    for (let j = 0; j < 3; j++){
        linha.push(valor++);
    }
    matriz.push(linha);
}


console.log(matriz);

let diagonalPrincipal = 0;
let diagonalSecundaria = 0;

for (let i = 0; i < 3; i++){
    diagonalPrincipal += matriz[i][i];
}

console.log("Soma da diagonal principal:" + diagonalPrincipal);

for (let i = 0; i < 3; i++){
    diagonalSecundaria += matriz[i][2-i];
}

console.log("Soma da diagonal secundária: " + diagonalSecundaria);


let novaMedida = diagonalPrincipal * ( diagonalSecundaria / 3);
console.log("O valor da nova medida é:" + novaMedida);