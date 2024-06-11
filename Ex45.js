/*

Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array

*/

const readline = require('readline-sync');

let arr = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];

function contaStrings(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }

    return obj;
}

console.log(contaStrings(arr));

