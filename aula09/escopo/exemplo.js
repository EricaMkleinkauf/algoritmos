//não da para chamar uma variavel que está fora da função 

let nome = 'erica' // escopo global

function chamaNome () {
    let idade = 16 // escopo local 1#
    console.log(nome)
    function imprimaFrase(){
        let altura = 1.63 // escopo local #2
        console.log(`ola ${nome}, como vai?`)
    }
    imprimaFrase()
}

chamaNome()



const a = 1 // declaração de varável a no escopo global 

function imprimeVariavel (){
    const b = 2 // declaração de variavel b no escopo local
    console.log ('variavel a', a)
    console.log ('variavel b', b)
}

imprimeVariavel()

console.log ('variavel a', a)
//console.log ('variavel b', a)

