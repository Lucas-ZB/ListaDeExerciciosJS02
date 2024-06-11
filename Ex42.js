/*

Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.

*/

const dados = {
    numero: 1,
    string: 'string',
    array: [1, 2, 3],
    array2: [4, 5, 6]
}

function retornaArrays(obj) {
    let arrays = {};

    for (let prop in obj) {
        if (Array.isArray(obj[prop])) {
            arrays[prop] = obj[prop];
        }
    }

    return arrays;
}

console.log(retornaArrays(dados));

