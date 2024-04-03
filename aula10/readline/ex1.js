// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


let readlineSync = require('readline-sync');

let nome = readlineSync.question("qual o seu nome?")
let email = readlineSync.question('qual seu email')

console.log (`o e-mail ${email} foi cadastrado com sucesso. Seja bem vindo,${nome}`)