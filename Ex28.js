/*

Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;

*/

const readline = require('readline-sync');

let matriz = [];
let somaAcima = 0;
let somaAbaixo = 0;

//iniciar matriz de maneira ordenada e não aletória

for (let i = 0; i < 10; i++){
    matriz[i] = [];
    for (let j = 0; j < 10; j++){
        matriz[i][j] = i + j;
    }}

//exibindo a matriz
console.log('Matriz:');
for (let i = 0; i < 10; i++){
    let linha = '';
    for (let j = 0; j < 10; j++){
        linha += matriz[i][j] + ' ';
    }
    console.log(linha);
}

for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        if (i < j){
            somaAcima += matriz[i][j];
        }
        if (i > j){
            somaAbaixo += matriz[i][j];
        }
    }
}

console.log('Soma dos elementos acima da diagonal principal: ' + somaAcima);
console.log('Soma dos elementos abaixo da diagonal principal: ' + somaAbaixo);



    