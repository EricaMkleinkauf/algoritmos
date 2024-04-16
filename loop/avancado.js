/*Exercícios 7 a 9 (Nível Avançado):
7. Mostrar os números de 1 a 100, mas substitua os múltiplos de 3 por "Fizz", os
múltiplos de 5 por "Buzz" e os múltiplos de 3 e 5 por "FizzBuzz": Utilize um loop
for para implementar a lógica do FizzBuzz.
8. Ler 10 números do usuário e mostrar o maior e o menor número digitado:
Utilize um loop for para ler 10 números do usuário e encontrar o maior e o menor
número digitado. Mostre os resultados no console.
9. Calcular a fatorial de um número: Utilize um loop for para calcular a fatorial de
um número digitado pelo usuário. Mostre o resultado no console*/

//7
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//8
let maiorNumero = 0
let menorNumero = 0
for(let i = 1; i<=10 ;i ++ ){
    let pergunta = Number(readlineSync.question(`fale o ${i} numero:`))
    if (pergunta>maiorNumero){
    maiorNumero = pergunta
}
    if (pergunta < menorNumero){
    menorNumero = pergunta
}
    if (i===10){
   console.log(menorNumero,maiorNumero)
}}

//9
let fatorial =1
for(let i = 1;i<=10; i++){
fatorial = fatorial*i
console.log(fatorial)
}