const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// vai imprimir tudo em maiusculo, substituindo as letras A por I, e vai ser contadas todas as caracteres