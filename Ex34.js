/*

Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.


*/

const readline = require ('readline-sync');

let matriz = [];
let valor = 1;

for (let i = 0; i < 50; i++) {
    let linha = [];
        for(let j = 0; j < 50; j++){
            linha.push(valor++);
    }
    matriz.push(linha);
}

console.log(matriz);

function mostrarMatriz(matriz) {
    for (let i = 0; i < 50; i++){
        console.log(matriz[i].join('\t'));
    }
}

function multiplicarLinhasPorDiagonalPrincipal(matriz) {
    
    for (let i = 0; i < 50; i++) {
        let elementoDiagonalPrincipal = matriz[i][i];
            for (let j = 0; j < 50; j++) {
                matriz[i][j] *= elementoDiagonalPrincipal;   
        }
    }
}

// Multiplicar cada linha pelo elemento da diagonal principal
multiplicarLinhasPorDiagonalPrincipal(matriz);

// Mostrar a matriz resultante
mostrarMatriz(matriz);