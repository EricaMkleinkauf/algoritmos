let pessoa = {
    nome: "francisco", 
    idade: 16,
    generoMusical: "funk",
     
}


function exercicio2(objeto){
const pessoaNova = {
    ...objeto,
    pessoacomidaPreferida: ["massa", "strogonoff", "pizza"],
    pessoamelhorAmigo: ["Arthur"],
    idade: 17
}

console.log(`o nome da pessoa é ${objeto.nome} e suas comidas preferidas são ${pessoaNova.pessoacomidaPreferida} e seu melhor amigo se chama ${pessoaNova.pessoamelhorAmigo} e tem ${pessoaNova.idade} anos`)
}
exercicio2(pessoa)