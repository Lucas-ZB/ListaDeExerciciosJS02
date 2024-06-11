const prompt = require('prompt-sync')();

let n1 = 1, n2 = 1;
let proximo;
let soma = n1 + n2;

console.log("Sequência de Fibonacci:");
console.log(n1);
console.log(n2);

for (let i = 3; i <= 10; i++) {
    proximo = n1 + n2;
    console.log(proximo);
    soma += proximo;
    n1 = n2;
    n2 = proximo;
}

console.log(`Soma: ${soma}`);
