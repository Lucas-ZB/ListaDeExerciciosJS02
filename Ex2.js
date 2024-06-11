/*  

Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h-1
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

*/

const readline = require('readline-sync');

const rl = readline.createInterface({  
    input: process.stdin,
    output: process.stdout
    });

let velocidade = parseFloat(readline.question("Qual a velocidade do carro? "));
let multa = 0;
const velocidadeMaxima = 80;

if (velocidade > velocidadeMaxima) {
    multa = (velocidade - velocidadeMaxima) * 5;
    console.log(`Você foi multado em R$ ${multa.toFixed(2)}`);
} else {
    console.log("Você está dentro do limite de velocidade.");
}

rl.close();


