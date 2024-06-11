/*

Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.

*/

const inventarioLojaA = {
    macas: 10,
    bananas: 5,
    peras: 7
}

const inventarioLojaB = {
    bananas: 10,
    laranjas: 10,
    peras: 5
}

function combinaInventarios(inventarioLojaA, inventarioLojaB) {
    let inventario = {};

    for (let item in inventarioLojaA) {
        inventario[item] = inventarioLojaA[item];
    }

    for (let item in inventarioLojaB) {
        if (inventario[item]) {
            inventario[item] += inventarioLojaB[item];
        } else {
            inventario[item] = inventarioLojaB[item];
        }
    }

    return inventario;
}

console.log(combinaInventarios(inventarioLojaA, inventarioLojaB));

