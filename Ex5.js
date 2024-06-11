/*

Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

*/

const readline = require('readline-sync');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

    });

let jogador1 = readline.question("Jogador 1, escolha entre Pedra, Papel ou Tesoura: ");
let jogador2 = readline.question("Jogador 2, escolha entre Pedra, Papel ou Tesoura: ");

if (jogador1 === jogador2) {
    console.log("Empate!");
}

else if (jogador1 === "Pedra" && jogador2 === "Tesoura" || jogador1 === "Papel" && jogador2 === "Pedra" || jogador1 === "Tesoura" && jogador2 === "Papel") {
    console.log("Jogador 1 venceu!");
}

else {
    console.log("Jogador 2 venceu!");
}

rl.close();

