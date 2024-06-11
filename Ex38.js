/*

Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.

*/

const readline = require('readline-sync')

let vetor = []
let operacao = parseInt(readline.question('Digite a operação desejada: '))
let soma = 0
let produto = 1
let media = 0

for (let i = 0; i < 6; i++) {
    vetor.push(parseInt(readline.question('Digite um valor: ')))
}

switch (operacao) {
    case 1:
        for (let i = 0; i < 6; i++) {
            soma += vetor[i]
        }
        console.log('Soma dos elementos:', soma)
        break
    case 2:
        for (let i = 0; i < 6; i++) {
            produto *= vetor[i]
        }
        console.log('Produto dos elementos:', produto)
        break
    case 3:
        for (let i = 0; i < 6; i++) {
            media += vetor[i]
        }
        console.log('Média dos elementos:', media / 6)
        break
    case 4:
        vetor.sort((a, b) => a - b)
        console.log('Vetor ordenado:', vetor)
        break
    case 5:
        console.log('Vetor:', vetor)
        break
    default:
        console.log('Operação inválida.')
}

