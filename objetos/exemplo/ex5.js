const usuario = {
    nome: "Prof",
    idade: 25,
    email: "prof@",
    cidade: "araruca"
}

const novousuario = {
    ...usuario,
    nome: "joao",
    idade: "32"
}

console.log(usuario, novousuario)