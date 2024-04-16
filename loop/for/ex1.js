function encontrarMaiorNumero(array) {
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] > maior) {
        maior = array[i]; 
      }
    }
  
    return "O maior número é " + maior;
  }
  
  let numeros = [32, 15, 18, 14, 12, 13];
  
  console.log(encontrarMaiorNumero(numeros));
  