function verificar(numero) {
    if (numero > 0) {
      return "número positivo.";
    } else if (numero < 0) {
      return "número negativo.";
    } else {
      return "número zero.";
    }
  }
  
  let resultado = verificar (-5)
  console.log(resultado)