/* 

Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.



*/

const readline = require('readline-sync')

let vetorPar = []
let vetorImpar = []

for (let i = 0; i < 30; i++) {
    let valor = parseInt(readline.question('Digite um valor: '))

    if (valor % 2 === 0) {
        vetorPar.push(valor)
        if (vetorPar.length === 5) {
            console.log('Vetor Par:', vetorPar)
            vetorPar = []
        }
    } else {
        vetorImpar.push(valor)
        if (vetorImpar.length === 5) {
            console.log('Vetor Impar:', vetorImpar)
            vetorImpar = []
        }
    }
}

console.log('Vetor Par:', vetorPar)
console.log('Vetor Impar:', vetorImpar)

