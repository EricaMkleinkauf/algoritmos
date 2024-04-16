const readlineSync = require('readline-sync');

 function calcular() {
    let soma =0;
    let input
    console.log("digite os numeros (digite '0' para parar):");
    while (input !== 0) {
        input = Number(readlineSync.question("numero: "))
        soma += input;
    }
    return soma 
 }

 const somaTotal = calcular();
 console.log("a soma dos numeros é:", somaTotal)