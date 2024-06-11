/*

Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.

*/

const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

for (let i = 0; i < 5; i++) {
    nomes.push(prompt('Nome: '));
    idades.push(Number(prompt('Idade: ')));
}

for (let i = 0; i < 5; i++) {
    if (idades[i] < 18) {
        console.log(nomes[i], idades[i]);
    }
}

