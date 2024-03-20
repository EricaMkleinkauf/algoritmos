// importando o módulo readline
const readline = require("readline");

//criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//solicitando ao usuário que insira sua idade
rl.question("qual sua idade", (idade) => {
    //exibindo a idade inserida pelo usuário 
    console.log("sua idade", idade);

    //fechando a interface de leitura 
    rl.close();
})


