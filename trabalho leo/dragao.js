let dragao  = [
    
]//banco de dados fake

const statusDragons = [

    {nome: "Caraxes", status: "vivo"},
    {nome: "Syrax", status: "vivo"},
    {nome: "meleys", status: "vivo"},
    {nome: "vermithor", status: "vivo"},
    {nome: "Sunfyre", status: "vivo"},
    {nome: "Tessarion", status: "vivo"},
    {nome: "Vhagar", status: "vivo"},
    {nome: "Dreamfyre", status: "vivo"},
    {nome: "Arrax", status: "morto"},
    {nome: "Seasmoke", status: "vivo"},
    {nome: "Tyraxes", status: "vivo"},
    {nome: "Vermax", status: "vivo"},
   
]




const readline = require('readline-sync');

function dragoes(){ //mostra se o array está vazio
    if (dragoes.length === 0)
    console.log('Este array esta vazio')
}

dragoes()

function exibirMenu() {
    console.log('menu de opções ');
    console.log('1. adicionar ');
    console.log('2. atualizar o status ');
    console.log('3. ver a quantidade de dragoes ');
    console.log('4. atualizar o status do dragao ');
    console.log('5. visualizar todos personagens')
    console.log('6. sair do programa ')

}

function adicionarPersonagem() {
    let personagem = readline.question("Digite o nome do novo personagem: ");
    let casa = readline.question("Digite a casa do personagem: ");
    let statusdoPersonagem = readline.question("Digite o status do personagem (vivo, morto ou desconhecido): ")
    dragao.push({ nome: personagem, casa: casa, status: statusdoPersonagem  });

}

function novoStatus(){
    const num = Number(readline.question("Digite o indice do personagem que você quer mudar o status:"))
    const novoStatus = readline.question("Novo status do personagem (vivo/morto/desconhecido):")

    dragao[num].status = novoStatus
    console.log('Agora seu status é', novoStatus)
}



 
function verificaDragões(){
    let nomeCasa = readline.question("Digite o nome da casa:")
  
    if (nomeCasa == 'targaryen') {
    console.log("7 dragões")
    } else if (nomeCasa == 'velaryon') {
        console.log ("5 dragões")
    }else{console.log("0 dragões")}
    
}

function statusDragoes (){   
for (let i = 0; i < statusDragons.length; i++) {
    
    console.log(`O dragão ${statusDragons[i].nome} está ${statusDragons[i].status}.`)
}
}

function processarEscolha(opcao) {
    switch (opcao){
        case '1':
            console.log('voce escolheu a opção 1. ');
            adicionarPersonagem()
            console.log(dragao)
            break;
        case '2':
            console.log('Você escolheu a opção 2.');
            novoStatus()
            console.log(dragao)
            break;
        case '3':
            console.log('Você escolheu a opção 3.');
            verificaDragões()
            break;
        case '4':
            console.log('voce escolheu a opção 4');
            statusDragoes()
            console.log(statusDragoes)
            break;
        case '5':
            console.log('voce escolheu a opção 5.');
            console.log(dragao)
            break;
        case '6':
            console.log('Encerrando o programa...');
            return true; //Indica que o programa deve ser encerrado
        default:
            console.log('Opção invalida. Por Favor, escolha uma opcao valida.');
    }
    return false; //Indica que o programa não deve ser encerrado
}

processarEscolha() 


function main() {
    let encerrar = false;

    while(!encerrar) {
        exibirMenu();                                                                                                         
        let opcao = readline.question('Digite o numero da opcao desejada: ');
        encerrar = processarEscolha(opcao);
    }
}

main()