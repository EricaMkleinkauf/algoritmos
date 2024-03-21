const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificaNumero (numero1) {
    if (numero1 % 2 === 0) {
    console.log('0 número ${numero1} é par.`); {}
     } else {
    console.log('0 número ${numero1} é impar.`){}
    }
    rl.close();
    }
    rl.question("Digite um número: ", (numero) => { verificaNumero (numero);
    });