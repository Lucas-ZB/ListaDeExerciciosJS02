/*

Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km

*/

const readline = require('readline-sync');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });


let tipoCarro = readline.question("Qual o tipo de carro alugado (popular ou luxo)? ");
let diasAluguel = parseFloat(readline.question("Quantos dias de aluguel? "));
let kmPercorridos = parseFloat(readline.question("Quantos Km foram percorridos? "));
let preco = 0;
const precoPopular = 90;
const precoLuxo = 150;

if (tipoCarro === "popular") {
    if (kmPercorridos <= 100) {
        preco = precoPopular * diasAluguel + kmPercorridos * 0.20;
    } else {
        preco = precoPopular * diasAluguel + kmPercorridos * 0.10;
    }
} else {
    if (kmPercorridos <= 200) {
        preco = precoLuxo * diasAluguel + kmPercorridos * 0.30;
    } else {
        preco = precoLuxo * diasAluguel + kmPercorridos * 0.25;
    }
}

