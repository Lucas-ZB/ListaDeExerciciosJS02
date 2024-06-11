/*

Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final

*/

const readline = require('readline-sync');

let matrizM = [];
let vetorV = [];
let valorA = 0;

valorA = parseFloat(readline.question('Digite um valor para A: '));

//iniciar matriz de maneira ordenada

for (let i = 0; i < 6; i++){
    matrizM[i] = [];
    for (let j = 0; j < 6; j++){
        matrizM[i][j] = Math.floor(Math.random() * 100);
    }}

//exibindo a matriz M

console.log('Matriz M:');

for (let i = 0; i < 6; i++){
    let linha = '';
    for (let j = 0; j < 6; j++){
        linha += matrizM[i][j] + ' ';
    }
    console.log(linha);
}

//calculando e exibindo o vetor V

console.log('Vetor V:');

for (let i=0; i < 6; i++){
    for (let j=0; j < 6; j++){
        vetorV.push(matrizM[i][j] * valorA);
    }
}

console.log(vetorV);

