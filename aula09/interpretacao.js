
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))

//a) vai imprimir 10 e 50
//b) se tirar o console.log vai retornar 10 e 50


let textoDoUsuario = prompt("Insira um texto"); // prompt tipo que imprime

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura") // tolowerCase transforma em minusculo. includes verifica se tem a palavra cenoura.
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/*a. Explique o que essa função faz e qual é sua utilidade
ela pega e identifica se existe a "tal palavra" como cenoura no texto, e transforma as palavras maiusculas em minusculo

/*b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura | true
     ii.  CENOURA é bom pra vista | true
     iii. Cenouras crescem na terra | false*/

    
