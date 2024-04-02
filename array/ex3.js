let personagens = ["Harry Potter", "Hermione Granger", "Jon Snow", "Arya Stark", "Darth Vader", "dory", "sansa", "lava girl", "jade picon", "lindinha", "arthur cidade"];

function retornarPersonagemAleatorio(personagens) {
    let indiceAleatorio = Math.floor(Math.random() * personagens.length);
    return personagens[indiceAleatorio];
  }

let personagemPremiado = retornarPersonagemAleatorio(personagens);
console.log(personagemPremiado);
  