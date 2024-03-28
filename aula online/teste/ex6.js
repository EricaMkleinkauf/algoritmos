function maiorNum (num1, num2, num3, num4, num5) {

let maiorNumero = num1;

if (num2 > maiorNumero) {
  maiorNumero = num2;
}
if (num3 > maiorNumero) {
  maiorNumero = num3;
}
if (num4 > maiorNumero) {
  maiorNumero = num4;
}
if (num5 > maiorNumero) {
  maiorNumero = num5;
}

return maiorNumero;
}

let resultado = maiorNum(505, 67, 34, 92, 49)
console.log(resultado)