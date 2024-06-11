/* 

Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.

*/

const readline = require('readline-sync');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

    });

let numeroSorteado = Math.floor(Math.random() * 5) + 1;
let numeroJogador = parseInt(readline.question("Digite um número entre 1 e 5: "));
let resultado = "";

if (numeroJogador === numeroSorteado) {
    resultado = "Você acertou!";
} else {
    resultado = `Você errou! O número sorteado foi ${numeroSorteado}`;
}

console.log(resultado);