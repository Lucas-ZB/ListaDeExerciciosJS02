/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

const readline = require('readline-sync');

let vendas = [
    {
        vendedor: 'João',
        valor: 100
    },
    {
        vendedor: 'Maria',
        valor: 200
    },
    {
        vendedor: 'João',
        valor: 300
    },
    {
        vendedor: 'Maria',
        valor: 400
    }
]

function totalVendas(vendas) {
    let obj = {};

    for (let i = 0; i < vendas.length; i++) {
        if (obj[vendas[i].vendedor]) {
            obj[vendas[i].vendedor] += vendas[i].valor;
        } else {
            obj[vendas[i].vendedor] = vendas[i].valor;
        }
    }

    return obj;
}  

console.log(totalVendas(vendas));

