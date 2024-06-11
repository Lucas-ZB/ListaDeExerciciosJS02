/*

Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos

*/

const obj1 = {
    nome: 'João',
    idade: 30
}

const obj2 = {
    idade: 31,
    email: 'joao@gmail.com',
    telefone: '999999999' 
}

function combinaObjetos(obj1, obj2) {
    let obj3 = {};

    for (let prop in obj1) {
        obj3[prop] = obj1[prop];
    }

    for (let prop in obj2) {
        obj3[prop] = obj2[prop];
    }

    return obj3;
}