function imprimaFrase(){
    console.log("olá mundo")
}


function imprimaFrase2(nome){
    console.log(`olá ${nome}!`)
}

imprimaFrase2("erica")
imprimaFrase2("isabela")
imprimaFrase2("francisco")
imprimaFrase()

function nota(nota1, nota2, nota3){
    let = media = ((nota1 + nota2 + nota3) /3)
    console.log(media)
}
nota(10,20,30)


function numPar(num){
    if ((num % 2) === 0){
        console.log("essse numero é par")
    }else {
        console.log("esse numero é impar")
    }
}
numPar(5)