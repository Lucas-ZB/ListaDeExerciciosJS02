/*

Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.


*/

const readline = require('readline-sync');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

let distancia = parseFloat(readline.question("Qual a distância que você deseja percorrer em Km? "));
let preco = 0;
const precoCurto = 0.50;
const precoLongo = 0.45;

if (distancia <= 200) {
    preco = distancia * precoCurto;
    console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`);
} else {
    preco = distancia * precoLongo;
    console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`);
}

rl.close();


