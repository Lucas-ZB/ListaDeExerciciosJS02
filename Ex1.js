/*

Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.


*/

const readline = require('readline-sync');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

let cigarrosPorDia = parseFloat(readline.question("Quantos cigarros você fuma por dia? "));
let anosFumando = parseFloat(readline.question("Há quantos anos você fuma? "));
let totalCigarros = cigarrosPorDia * 365 * anosFumando;
let tempoPerdido = totalCigarros * 10 / 1440;

console.log(`Você perdeu ${tempoPerdido.toFixed(2)} dias de vida.`);

rl.close();


