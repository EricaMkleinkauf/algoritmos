
const readline = require('readline-sync');

let doadores = []

function cadastrarDoador() {
    console.log("Cadastro de Doador")
    const nome = readline.question("Digite o nome do doador: ")
    const idade = readline.questionInt("Digite a idade do doador: ")
    const peso = readline.questionFloat("Digite o peso do doador (kg): ")
    const tipoSanguineo = readline.question("Digite o tipo sanguineo do doador: ")
    const ultimaDoacao = readline.question("Digite a data da ultima doacao: ")
    
    doadores.push({
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        ultimaDoacao: ultimaDoacao
    });
}

function listarDoadores() {
    console.log("Lista de Doadores:");
    for (let i = 0; i < doadores.length; i++) {
        console.log(`Nome: ${doadores[i].nome}, Idade: ${doadores[i].idade}, Peso: ${doadores[i].peso}, Tipo Sanguineo: ${doadores[i].tipoSanguineo}, Ultima Doacao: ${doadores[i].ultimaDoacao}`);
    }
}

function buscaTipoSanguineo() {
    const tipoSanguineo = readline.question("Digite o tipo sanguineo que procura: ");
    let encontrado = false;
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i].tipoSanguineo === tipoSanguineo) {
            console.log(`Nome: ${doadores[i].nome}, Idade: ${doadores[i].idade}, Peso: ${doadores[i].peso}, Tipo Sanguíneo: ${doadores[i].tipoSanguineo}, Última Doação: ${doadores[i].ultimaDoacao}`);
            encontrado = true;
        }
    }
    if (!encontrado) {
        console.log("Nenhum doador encontrado com esse tipo sanguineo.");
    }
}

function buscaDataDoacao() {
    const data = readline.question("Digite a data para buscar doadores que doaram antes desta data:");
    let encontrado = false;
    for (let i = 0; i < doadores.length; i++) {
        if (new Date(doadores[i].ultimaDoacao) <= new Date(data)) {
    console.log(`Nome: ${doadores[i].nome}, Idade: ${doadores[i].idade}, Peso: ${doadores[i].peso}, Tipo Sanguíneo: ${doadores[i].tipoSanguineo}, Última Doação: ${doadores[i].ultimaDoacao}`);
            encontrado = true;
        }
    }
    if (!encontrado) {
        console.log("Nenhum doador encontrado com data de doacao anterior a essa.");
    }
}

function exibirMenu() {
    console.log("Menu de Opcoes");
    console.log("1. Cadastrar Doador");
    console.log("2. Listar Doadores");
    console.log("3. Buscar Doador por Tipo Sanguíneo");
    console.log("4. Buscar Doador por Data da Ultima Doacao");
    console.log("5. Encerrando programa... ");
}

function processarEscolha(opcao) {
    switch (opcao) {
        case '1':
            cadastrarDoador();
            break;
        case '2':
            listarDoadores();
            break;
        case '3':
            buscaTipoSanguineo();
            break;
        case '4':
            buscaDataDoacao();
            break;
        case '5':
            console.log("Encerrando o programa...");
            return true;
        default:
            console.log("Opcao invalida!");
            break;
    }
    return false;
}

function main() {
    let encerrar = false;
    while (!encerrar) {
        exibirMenu();
        let opcao = readline.question('Digite o numero da opcao desejada: ');
        encerrar = processarEscolha(opcao);
    }
}

main();
