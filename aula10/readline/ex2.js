let readlineSync = require('readline-sync');

console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

let comida = ['sushi','pizza','xis','lasanha','churrasco']

const comidaNova = readlineSync.question('qual sua comida favorita ?')
comida.splice(1,1)
comida.push(comidaNova)
console.log(comida)
