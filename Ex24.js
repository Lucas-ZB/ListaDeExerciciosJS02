
function contarNegativosPorLinha(M) {

    const numLinhas = 6;
    const numColunas = 8

    //Inicia o vetor C com 6 posições

    let C = new Array(numLinhas).fill(0);

    //Percorre cada linha da matriz M

    for (let i = 0; i < numLinhas; i++){

        let countNegativos = 0;

        //Percorre cada elemento da linha i

            for (let j = 0; j < numColunas; j++) {

                if (M[i][j] < 0) {
                    countNegativos++;
                    
                }    
            }
            //Armazena a quantidade de elementos negativos na posição correspondente de C

            C[i] = countNegativos;
    }

    return C;
   
}

//Chamando a função e imprimindo o vetor C

let M = [
    [1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, 2, 3, 4, 5, 6, 7, 8]
];

let C = contarNegativosPorLinha(M);
console.log(C);