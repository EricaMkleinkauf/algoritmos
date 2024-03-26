let media = function (nota1, nota2, nota3) {
    let soma = (nota1 + nota2 + nota3)
    let media = (soma / 3)
    console.log(media)
}
const soma = media(10,20,30)


let numPar = (num) => {
    if ((num % 2) === 0){
        console.log("essse numero é par")
    }else {
        console.log("esse numero é impar")
    }
}
numPar(5)
numPar (4)