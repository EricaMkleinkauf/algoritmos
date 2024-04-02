const nome = 'erica'
const cor = 'roxo'

console.log('meu nome é ' + nome + ', minha cor favorita é ' + cor)
console.log(`meu nome é ${nome}, e minha cor favorita é ${cor}.`)

let nome1 = 'erica'
console.log(nome1.length)

const frase = 'pragaaaaa'
const fraseMinuscula = frase.toUpperCase()
console.log(fraseMinuscula)

const email = '   kleinkauferica09@gmail.      '
console.log(email.trim())


// includes
const frase1 = "hoje comi cenoura"
frase1.includes('cenouras')
frase1.includes('batata')
console.log(frase1.includes('batata'))




const frase2 = "hoje comi cenoura, adoro cenoura"
const novaFrase = frase2.replaceAll("cenoura", "batata")
console.log(novaFrase)