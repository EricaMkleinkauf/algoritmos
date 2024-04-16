/*Exercícios 10 a 12 (Nível Desafio):
10. Mostrar a sequência de Fibonacci até o 10º termo: Utilize um loop for para
calcular e mostrar os 10 primeiros termos da sequência de Fibonacci no console.
11. Gerar um número aleatório entre 1 e 100 e pedir ao usuário para adivinhar o
número: Utilize um loop while para gerar um número aleatório entre 1 e 100 e
pedir ao usuário para adivinhar o número. Dê dicas ao usuário se o chute for maior
ou menor que o número aleatório.
12. Simular um jogo de cara ou coroa: Utilize um loop while para simular um jogo de
cara ou coroa. O jogo termina quando o usuário obtém o resultado desejado (cara
ou coroa).*/

//10
let termoAnterior = 0;
let termoAtual = 1;
let proximoTermo;

console.log("Os 10 primeiros termos da sequência de Fibonacci são:");

for (let i = 1; i <= 10; i++) {
  console.log(termoAnterior);
  proximoTermo = termoAnterior + termoAtual;
  termoAnterior = termoAtual;
  termoAtual = proximoTermo;
}

//11

//12
let resultadoDesejado = "cara"; // ou "coroa"
let resultado;
let tentativas = 0;

while (resultado !== resultadoDesejado) {
  let aleatorio = Math.random();
  if (aleatorio < 0.5) {
    resultado = "cara";
  } else {
    resultado = "coroa";
  }
  tentativas++;
}

console.log(`Você obteve o resultado desejado "${resultadoDesejado}" após ${tentativas} tentativas.`);

