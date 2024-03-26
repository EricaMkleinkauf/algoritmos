//1.a)

function sobreMim(){
    console.log('Meu nome é Eica, tenho 16 anos, moro em sapucaia e sou estudante!')
}
sobreMim()

//1.b)

function sobreMim(nome,idade,cidade,profissao){
    console.log(`Eu sou ${nome},tenho ${idade} anos,moro em ${cidade},e sou ${profissao}`)
}
sobreMim('erica' ,16, 'sapucaia' , 'estudante')


//2
//a
function somarNumeros(num1, num2) {
    return num1 + num2;
  }
  const resultadoSoma = somarNumeros(7, 15);
  console.log(resultadoSoma);

//b
function verificarMaiorOuIgual(num1, num2) {
    return num1 >= num2;
  }
  const resultadoVerificacao = verificarMaiorOuIgual(10, 5);
console.log(resultadoVerificacao);

//c
function verificarParOuImpar(numero) {
    return numero % 2 === 0;
  }
  
  const resultadoPar = verificarParOuImpar(8);
  console.log(resultadoPar);

//d
function imprimirTamanhoMaiusculo(mensagem) {
    console.log(`Tamanho da mensagem: ${mensagem.length} caracteres`);
    console.log(`Versão em maiúsculas: ${mensagem.toUpperCase()}`);
}
imprimirTamanhoMaiusculo("Olá, mundo!");

