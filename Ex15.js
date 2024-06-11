/*

Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.

*/

const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(Number(prompt("Digite um número inteiro: ")));
}

let pares = [];

for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}

console.log(`Números pares: ${pares}`);
console.log(`Posições: ${pares.map((elemento) => numeros.indexOf(elemento))}`);

