/*

Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.

*/

const prompt = require('prompt-sync')();

let horarios = [];

for (let i = 0; i < 5; i++) {
    let horario = prompt('Horário: ');

    while (horario.length != 8 || horario[2] != '.' || horario[5] != '.') {
        console.log('Horário inválido');
        horario = prompt('Horário: ');
    }

    horarios.push(horario);
}  

console.log(horarios);
