const readlineSync = require('readline-sync');

const nome = readlineSync.question("qual o seu nome?")
const idade = readlineSync.question('qual sua idade?')
const cidade = readlineSync.question('qual sua cidade?')

console.log('nome:' + nome);
console.log('idade:' + idade);
console.log('cidade:' + cidade);