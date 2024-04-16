/*Exercícios 1 a 3 (Nível Iniciante):
1. Mostrar os números de 1 a 10: Utilize um loop for para imprimir os números de 1
a 10 no console.
2. Mostrar os números pares de 1 a 10: Utilize um loop for para imprimir apenas os
números pares de 1 a 10 no console.
3. Mostrar a tabuada do 5: Utilize um loop for para imprimir a tabuada do 5 (de 5 x 1
até 5 x 10) no console.*/

//1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }


//2
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
  
//3
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
