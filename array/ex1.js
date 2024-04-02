//num
const racas = ['pintcher', 'dalmata', 'pastor alemao', 'golden', 'pug']
const listaDeNumeros = [1, 2, 3, 4, 5, 6]

console.log(racas)
console.log(listaDeNumeros)

const segundoI = racas[3]
console.log(racas[3])

//includes e length
console.log(racas.includes("pitbul"))
console.log(racas.length)

const series = ["bridgerton", "htd"]
series.includes("bridgerton")
series.includes("gossip girl")
console.log()

//push
const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)

numeros.push(5, 6, 7)
console.log(numeros)

//pop
const peixes = ['palhaço', 'mandarim', 'sardinha']

peixes.pop()
console.log(peixes)
 

//splice
const letras = ["a", "b", "c", "d", "e", "f", "g", "h"]
// indices (i)   0    1    2    3    4    5    6    7

letras.splice(2, 1)
//      letras ["a", "b", "d", "e", "f", "g", "h"]
// indices (i)   0    1    2    3    4    5    6    

letras.splice(3, 2)
//letras = a b d g h