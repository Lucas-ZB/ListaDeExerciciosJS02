/*

Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.

*/

const readline = require('readline-sync');

let obj = {
    numero: 1,
    string: 'string',
    array: [1, 2, 3],
    array2: [4, 5, 6]
}

function contaStrings(obj) {
    let strings = 0;

    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            strings++;
        }
    }

    return strings;
}

console.log(contaStrings(obj));

