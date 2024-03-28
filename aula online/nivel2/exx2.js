let usuarios = [];

function cadastrarUsuario(nome, idade) {
  if (idade >= 18) {
    usuarios.push({ nome, idade });
    return "Usuário cadastrado com sucesso!";
  } else {
    return "O usuário deve ser maior de idade para se cadastrar.";
  }
}

function consultarUsuario(nome) {
  let usuarioEncontrado = usuarios.find(usuario => usuario.nome === nome);
  if (usuarioEncontrado) {
    return `Nome: ${usuarioEncontrado.nome}, Idade: ${usuarioEncontrado.idade}`;
  } else {
    return "Usuário não encontrado.";
  }
}

function removerUsuario(nome) {
  let indiceUsuario = usuarios.findIndex(usuario => usuario.nome === nome);
  if (indiceUsuario !== -1) {
    usuarios.splice(indiceUsuario, 1);
    return "Usuário removido com sucesso!";
  } else {
    return "Usuário não encontrado.";
  }
}

function calcularQuadrado(numero) {
  return numero ** 2;
}
console.log(cadastrarUsuario("Ana", 25));
console.log(cadastrarUsuario("João", 16));
console.log(consultarUsuario("Ana"));
console.log(removerUsuario("João")); 
console.log(calcularQuadrado(5)); 