const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("digite o primeiro numero: ", (numero1) => {
    rl.question("digite o segundo nuemro: ", (numero2) => {
        //calculando a soma 
        const resultado = (Number (numero1) + Number (numero2))

        //exibindo resultado
        console.log(`A soma de ${numero1} e ${numero2} é ${resultado}`)
        });
})
