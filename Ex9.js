const readline = require('readline-sync');

let salario = 0;
let sexo = "";
let totalHomens = 0;
let totalMulheres = 0;
let continuar = "s";

while (continuar === "s") {
    salario = parseFloat(readline.question("Digite o salário do funcionário: "));
    sexo = readline.question("Digite o sexo do funcionário (m/f): ").toLowerCase();

    if (sexo === "m") {
        totalHomens += salario;
    } else if (sexo === "f") {
        totalMulheres += salario;
    } else {
        console.log("Sexo inválido! Por favor, insira 'm' para masculino ou 'f' para feminino.");
    }

    continuar = readline.question("Deseja continuar (s/n)? ").toLowerCase();
}

console.log(`Total de salários pagos aos homens: R$ ${totalHomens.toFixed(2)}`);
console.log(`Total de salários pagos às mulheres: R$ ${totalMulheres.toFixed(2)}`);
