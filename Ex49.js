/*

Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

*/

const readline = require('readline-sync');

let transacoes = [
    {
        id: 1,
        valor: 100,
        data: '10/01/2020',
        categoria: 'Alimentação'
    },
    {
        id: 2,
        valor: 200,
        data: '10/01/2020',
        categoria: 'Alimentação'
    },
    {
        id: 3,
        valor: 300,
        data: '10/01/2020',
        categoria: 'Lazer'
    },
    {
        id: 4,
        valor: 400,
        data: '10/01/2020',
        categoria: 'Lazer'
    }
]

function categorizaTransacoes(transacoes) {
    let obj = {};

    for (let i = 0; i < transacoes.length; i++) {
        if (obj[transacoes[i].categoria]) {
            obj[transacoes[i].categoria].push(transacoes[i]);
            obj[transacoes[i].categoria].subtotal += transacoes[i].valor;
        } else {
            obj[transacoes[i].categoria] = [transacoes[i]];
            obj[transacoes[i].categoria].subtotal = transacoes[i].valor;
        }
    }

    return obj;
}

console.log(categorizaTransacoes(transacoes));
