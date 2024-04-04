//1) Soma de Números Positivos: Crie um programa que imprima o resultado da soma de dois números, apenas se os dois números forem positivos.

function somar (a, b){
    if (a > 0 && b > 0) {
        return a + b
    } else {
        return 'os dois precisam ser positivos, para realizar a soma'
    }

}

console.log(somar(17, 39))
console.log(somar(-2, 43))




//2) Multiplicação com Número Par: Crie um programa que imprima o resultado da multiplicação de dois números, apenas se pelo menos um dos números para par.

function multiplicacao(a, b) {
    if (a % 2 === 0 || b % 2 === 0) {
      return a * b;
    } else {
      return "Pelo menos um dos números precisa ser par para realizar a multiplicação.";
    }
  }
  
  console.log(multiplicacao(3, 4));
  console.log(multiplicacao(3, 5)); 


//3) Divisão por Não Zero: Crie um programa que imprima o resultado da divisão de dois números, apenas se o divisor não for zero.

  function divisao(a, b) {
    if (a / 2 !== 0 && b / 2 !== 0) {
      return a / b;
    } else {
      return "executar apenas se o divior não for zero.";
    }
  }
  
  console.log(divisao(3, 4));
  console.log(divisao(0, 7)); 


//4
  function imprimirArrayInversa(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
        return [];
    } else {
        // Seleciona o primeiro elemento do array
        const first = array[0];
        // Seleciona os elementos restantes do array (exceto o primeiro)
        const rest = array.slice(1);
        // Inverte os elementos restantes do array recursivamente
        const reversedRest = imprimirArrayInversa(rest);
        // Adiciona o primeiro elemento ao final do array invertido
        reversedRest.push(first);
        // Retorna o array invertido
        return reversedRest;
    }
}

console.log(imprimirArrayInversa([1, 2, 3, 4, 5]));   // Saída: [5, 4, 3, 2, 1]

//5
function imprimirArraySemExtremos(array) {
  array.pop(); // Remove o último elemento
  array.splice(0, 1); // Remove o primeiro elemento
  return array;
}

console.log(imprimirArraySemExtremos([1, 2, 3, 4, 5]));   // Saída: [2, 3, 4]

//6
function imprimirVogais(str) {
  const vogaisList = ['a', 'e', 'i', 'o', 'u'];
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.split('').filter(char => vogaisList.includes(char)).join('');
}

console.log(imprimirVogais("Hello World"));   // Saída: "eoo"

//7
function imprimirConsoantes(str) {
  const vogaisList = ['a', 'e', 'i', 'o', 'u'];
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.split('').filter(char => !vogaisList.includes(char) && char >= 'a' && char <= 'z').join('');
}

console.log(imprimirConsoantes("Hello World"));   // Saída: "hllwrld"

//8
function imprimirUltimoNumero(array) {
  if (array.length >= 2) {
      return array[array.length - 1];
  } else {
      return "O array não tem pelo menos dois elementos.";
  }
}

console.log(imprimirUltimoNumero([1, 2, 3, 4]));   // Saída: 5
console.log(imprimirUltimoNumero([9]));             // Saída: "O array não tem pelo menos dois elementos."

//9
function primeiroNumeroPositivo(array) {
  if (array.length > 0 && array[0] > 0) {
      return array[0];
  } else {
      return "O array está vazio ou o primeiro número não é positivo.";
  }
}

console.log(primeiroNumeroPositivo([5, -3, 7]));   // Saída: 5
console.log(primeiroNumeroPositivo([]));          // Saída: "O array está vazio ou o primeiro número não é positivo."
