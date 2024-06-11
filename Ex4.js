/* 

Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.


*/

const readline = require('readline-sync');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

let lado1 = parseFloat(readline.question("Digite o comprimento do primeiro lado: "));
let lado2 = parseFloat(readline.question("Digite o comprimento do segundo lado: "));
let lado3 = parseFloat(readline.question("Digite o comprimento do terceiro lado: "));

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) { 
    console.log("É possível formar um triângulo com esses lados.");
} else {    
    console.log("Não é possível formar um triângulo com esses lados.");
}

rl.close();