/*

Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".

*/

const readline = require('readline-sync');

let gabarito = [];
let apostadores = [];
let acertos = 0;

for (let i = 0; i < 13; i++) {
    gabarito.push(parseInt(readline.question(`Digite o gabarito da questão ${i + 1}: `)))
}

for (let i = 0; i < 100; i++) {
    let apostador = {
        numero: parseInt(readline.question(`Digite o número do cartão do apostador ${i + 1}: `)),
        respostas: []
    };

    for (let j = 0; j < 13; j++) {
        apostador.respostas.push(parseInt(readline.question(`Digite a resposta da questão ${j + 1}: `)))
    }

    apostadores.push(apostador);
}

for (let i = 0; i < 100; i++) {
    acertos = 0;
    for (let j = 0; j < 13; j++) {
        if (apostadores[i].respostas[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`O apostador ${apostadores[i].numero} acertou ${acertos} questões.`);

    if (acertos === 13) {
        console.log('Parabéns, tu foi o GANHADOR');
    }
}

