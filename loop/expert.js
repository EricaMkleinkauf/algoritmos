/*Exercícios 13 a 15 (Nível Expert):
13. Calcular a soma dos números ímpares de 1 a 100: Utilize um loop for para
calcular a soma dos números ímpares de 1 a 100. Mostre o resultado no console.
14. Mostrar a tabuada de todos os números de 1 a 10: Utilize um loop for aninhado
para mostrar a tabuada de todos os números de 1 a 10 no console.
15. Criar um programa que lê uma frase do usuário e conta o número de vogais e
consoantes na frase: Utilize um loop for para iterar sobre a frase e contar o
número de vogais e consoantes. Mostre os resultados no console*/

//13
let soma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}

console.log(`A soma dos números ímpares de 1 a 100 é: ${soma}`);

//14
for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log();
  }


//15
let frase = "Exemplo de frase"; 

frase = frase.toLowerCase(); 

let vogais = 0;
let consoantes = 0;

for (let i = 0; i < frase.length; i++) {
  let caractere = frase[i];
  if (`/[aeiou]/.test(caractere)`) {
    vogais++;
  } else if (`/[a-z]/.test(caractere)`) {
    consoantes++;
  }
}

console.log(`Na frase "${frase}" existem ${vogais} vogais e ${consoantes} consoantes.`);
