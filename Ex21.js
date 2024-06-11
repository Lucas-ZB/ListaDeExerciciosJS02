/*

Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

*/

const prompt = require('prompt-sync')();

function pesoIdeal(alt, sexo) {
    if (sexo === 'M') {
        return 72.7 * alt - 58;
    } else {
        return 62.1 * alt - 44.7;
    }
}

let alt = parseFloat(prompt('Altura: '));
let sexo = prompt('Sexo (M/F): ');

console.log(`Peso ideal: ${pesoIdeal(alt, sexo).toFixed(2)} kg.`);

