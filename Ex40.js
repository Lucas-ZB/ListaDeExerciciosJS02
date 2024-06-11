/*

Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)

*/

const readline = require('readline-sync');

let resultadoOficial = [];
let apostas = [];
let acertos = 0;

for (let i = 0; i < 5; i++) {
    resultadoOficial.push(parseInt(readline.question(`Digite o resultado oficial da Loto: `)))
}

for (let i = 0; i < 50; i++) {
    let aposta = [];

    for (let j = 0; j < 5; j++) {
        aposta.push(parseInt(readline.question(`Digite a aposta ${i + 1}: `)))
    }

    apostas.push(aposta);
}

for (let i = 0; i < 50; i++) {
    acertos = 0;
    for (let j = 0; j < 5; j++) {
        if (apostas[i][j] === resultadoOficial[j]) {
            acertos++;
        }
    }

    if (acertos === 5) {
        console.log('Ganhador');
    }
}

