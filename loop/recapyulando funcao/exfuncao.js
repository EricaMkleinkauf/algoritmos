function calculaArea (base,altura){
    const area = base * altura
    console.log(area)
}

calculaArea(60,54)
calculaArea(23,45)
calculaArea(34,67)



function frase (nome){ //parametro
    console.log(`ola ${nome}`)
}
 frase('leo')
 frase('erica')
 frase('jessica')




 function informacoes (nome, idade){
    console.log(`meu nome é ${nome} tenho ${idade} anos`)
 }
 
 informacoes("julia", 16)
 informacoes('amanda', 18)
 informacoes('lara', 32)





 function notas(nota1, nota2, nota3) {
   console.log (((nota1 + nota2 + nota3) /3).toFixed(2))
    
 }

notas(6, 10 ,85)




function parOuImpar(numero){
    if (numero % 2 === 0){
        return "o num é par"
    }else 
    return "o num é impar"

}

let numero = 8
console.log(parOuImpar(numero))