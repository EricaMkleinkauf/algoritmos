/*Exercícios 4 a 6 (Nível Intermediário):
4. Somar os números de 1 a 10: Utilize um loop for para calcular e mostrar a soma
de todos os números de 1 a 10 no console.
5. Calcular a média de 5 números: Utilize um loop for para ler 5 números do usuário
e calcular a média dos números digitados. Mostre a média no console.
6. Mostrar os números pares de 1 a 20, mas pular os múltiplos de 3: Utilize um
loop for para imprimir os números pares de 1 a 20 no console, mas pule os
números que são múltiplos de 3.*/

//4
let somar = 0;
for (let i = 1; i <= 10; i++) {
  somar += i;
}
console.log("A soma dos números de 1 a 10 é: " + somar);

//5
let numbers = [5, 8, 12, 6, 9];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

let media = total / numbers.length;
console.log("A média dos números é: " + media);


//6
for (let i = 2; i <= 20; i += 2) {
    if (i % 3 !== 0) {
      console.log(i);
    }
  }