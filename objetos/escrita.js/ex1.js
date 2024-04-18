let erica = {
    nome: "erica machado",
    apelido: ["caca", "eri", "sofia"]
}
function a(erica) {

console.log(`eu sou a ${erica.nome} mas pode me chamar de ${erica.apelido}`)
}
a(erica)

const euNovo = {...erica,
apelidos: ["machado", "kleinkauf", "ex do sampaio"],

}
console.log(`eu sou a ${erica.nome} mas pode me chamar de ${euNovo.apelidos}`)

