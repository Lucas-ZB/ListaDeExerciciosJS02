/* 

Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.

*/

const prompt = require('prompt-sync')();

let continuar = true;
let soma = 0;
let menor = 0;
let media = 0;
let pares = 0;
let contador = 0;

do {
    let numero = Number(prompt('Digite um número: '));
    soma += numero;
    if (contador === 0) {
        menor = numero;
    } else if (numero < menor) {
        menor = numero;
    }
    if (numero % 2 === 0) {
        pares++;
    }
    contador++;
    continuar = prompt('Deseja continuar? (S/N) ') === 'S' ? true : false;
} while (continuar);

media = soma / contador;

console.log(`Soma: ${soma}`);

console.log(`Menor: ${menor}`);

console.log(`Média: ${media}`);

console.log(`Pares: ${pares}`);

