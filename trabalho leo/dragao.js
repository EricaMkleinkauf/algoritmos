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




const readline = require('readline-sync'); //instalar o readline no terminal

function dragoes(){ //mostra se o array está vazio
    if (dragoes.length === 0)
    console.log('Este array esta vazio')
}

dragoes()//chamando a funçao

function exibirMenu() { // funcao do menu de opçoes, que ao chamarmos vai aparecer tudin
    console.log('menu de opções ');
    console.log('1. adicionar ');
    console.log('2. atualizar o status ');
    console.log('3. ver a quantidade de dragoes ');
    console.log('4. atualizar o status do dragao ');
    console.log('5. visualizar todos personagens')
    console.log('6. sair do programa ')

}

function adicionarPersonagem() { //funcao para adicionar um personagem
    let personagem = readline.question("Digite o nome do novo personagem: "); // criar uma variavel personagem 
    let casa = readline.question("Digite a casa do personagem: "); // criar uma variavel para a casa 
    let statusdoPersonagem = readline.question("Digite o status do personagem (vivo, morto ou desconhecido): ") //criar uma variavel para o status do personagem
    dragao.push({ nome: personagem, casa: casa, status: statusdoPersonagem  }); // dragao = nome do array vazio, push = adicionar os elementos no array

}

function novoStatus(){ // funcao para mudar o status do personagem
    const num = Number(readline.question("Digite o indice do personagem que você quer mudar o status:"))// criamos a nova variavel, Number porque indice funciona a traves de numeros
    const novoStatus = readline.question("Novo status do personagem (vivo/morto/desconhecido):") //criamos a variavel do novo status

    dragao[num].status = novoStatus //dragao = nome do array, [num] = para o usuario decidir qual indice ela vai alterar, = novoStatus = passar para o status novo
    console.log('Agora seu status é', novoStatus)
}



 
function verificaDragões(){ //funao de verificar quantos dragoes tem em cada casa
    let nomeCasa = readline.question("Digite o nome da casa:") //variavel para perguntar o nome das casas
  
    if (nomeCasa == 'targaryen') {// se o nome da casa for igual a targaryen, o console.log vai mostrar a quantidade de dragoes na casa targaryen
    console.log("7 dragões")
    } else if (nomeCasa == 'velaryon') {// se não, se o nome dacasa for igual a velaryon, o console vai mostrar a quantidade de dragoes na casa velaryon
        console.log ("5 dragões")
    }else{console.log("0 dragões")} // se nao for nenhuma dessas casas, mostra zero dragoes
    
}

function statusDragoes (){   //funcao para mostrar o status dos dragoes das casas
for (let i = 0; i < statusDragons.length; i++) { //for = um comando que faz um trecho do programa se repetir, uma variavel igual a zero, lenght le o array
    
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