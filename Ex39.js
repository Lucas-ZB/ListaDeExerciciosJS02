/*

Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

*/

const readline = require('readline-sync')

let vetorA = []
let vetorB = []

for (let i = 0; i < 100; i++) {
    vetorA.push(parseInt(readline.question('Digite um valor: ')))

    if (vetorA[i] > 0) {
        vetorB.push(vetorA[i])
    }

    else if (vetorA[i] === 0) {
        vetorB.push(vetorA[i])

    
}}

console.log('Vetor A:', vetorA);

console.log('Vetor B:', vetorB);


