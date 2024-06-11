/*

Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados

*/

const readline = require('readline-sync');

let obj = {

    numero: 1,
    string: 'string',
    array: [1, 2, 3],
    array2: [4, 5, 6]
}

function transformaObj(obj, fn) {
    let newObj = {};

    for (let prop in obj) {
        newObj[prop] = fn(obj[prop]);
    }

    return newObj;
}

function dobro(x) {
    return x * 2;
}

console.log(transformaObj(obj, dobro));

