/*

Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.
4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel

*/

const readline = require('readline-sync');

let hoteis = [];
let reservas = [];
let idHotel = 0;
let idReserva = 0;

function adicionaHotel() {
    let hotel = {
        id: idHotel,
        nome: readline.question('Digite o nome do hotel: '),
        cidade: readline.question('Digite a cidade do hotel: '),
        quartosTotais: parseInt(readline.question('Digite o número total de quartos do hotel: ')),
        quartosDisponiveis: parseInt(readline.question('Digite o número de quartos disponíveis: '))
    }

    hoteis.push(hotel);
    idHotel++;
}

function buscaHoteisPorCidade() {
    let cidade = readline.question('Digite a cidade que deseja buscar: ');

    let hoteisCidade = hoteis.filter(hotel => hotel.cidade === cidade);

    console.log(hoteisCidade);
}

function fazReserva() {
    let reserva = {
        idReserva: idReserva,
        idHotel: parseInt(readline.question('Digite o id do hotel que deseja reservar: ')),
        nomeCliente: readline.question('Digite o nome do cliente: ')
    }

    let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);

    if (hotel.quartosDisponiveis > 0) {
        hotel.quartosDisponiveis--;
        reservas.push(reserva);
        idReserva++;
    } else {
        console.log('Não há quartos disponíveis nesse hotel');
    }
}

function cancelaReserva() {
    let idReserva = parseInt(readline.question('Digite o id da reserva que deseja cancelar: '));

    let reserva = reservas.find(reserva => reserva.idReserva === idReserva);

    let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);

    hotel.quartosDisponiveis++;

    reservas = reservas.filter(reserva => reserva.idReserva !== idReserva);
}

function listaReservas() {
    console.log(reservas);
}

function menu() {
    console.log('1 - Adicionar hotel');
    console.log('2 - Buscar hotéis por cidade');
    console.log('3 - Fazer reserva');
    console.log('4 - Cancelar reserva');
    console.log('5 - Listar reservas');
    console.log('0 - Sair');
}

let opcao;

do {
    menu();

    opcao = parseInt(readline.question('Digite a opção desejada: '));

    switch (opcao) {
        case 1:
            adicionaHotel();
            break;
        case 2:
            buscaHoteisPorCidade();
            break;
        case 3:
            fazReserva();
            break;
        case 4:
            cancelaReserva();
            break;
        case 5:
            listaReservas();
            break;
    }
} while (opcao !== 0);

