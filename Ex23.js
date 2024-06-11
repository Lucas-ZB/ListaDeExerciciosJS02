/* 



*/

// Função para criar e imprimir a matriz identidade 7x7
function criarEImprimirMatrizIdentidade() {
    // Tamanho da matriz
    const tamanho = 7;
    
    // Inicializando a matriz identidade
    let matrizIdentidade = [];

    for (let i = 0; i < tamanho; i++) {
        // Inicializando a linha da matriz
        matrizIdentidade[i] = [];
        for (let j = 0; j < tamanho; j++) {
            // Colocando 1 na diagonal principal e 0 nos demais elementos
            if (i === j) {
                matrizIdentidade[i][j] = 1;
            } else {
                matrizIdentidade[i][j] = 0;
            }
        }
    }

    // Imprimindo a matriz identidade
    for (let i = 0; i < tamanho; i++) {
        console.log(matrizIdentidade[i].join(' '));
    }
}

// Chamando a função para criar e imprimir a matriz identidade
criarEImprimirMatrizIdentidade();
