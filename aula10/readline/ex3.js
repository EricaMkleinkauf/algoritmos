let readlineSync = require('readline-sync');


let lista = []
let p1 = readlineSync.question('qual sua primeira tarrefa ?')
let p2 = readlineSync.question('qual sua segunda tarrefa ?')
let p3 = readlineSync.question('qual sua terceira tarrefa ?')
lista.push(p1)
lista.push(p2)
lista.push(p3)
console.log(lista)
let p4 = readlineSync.question('qual vc ja fez ?')
let n1 = p4-1
lista.splice(n1,1)
console.log(lista)