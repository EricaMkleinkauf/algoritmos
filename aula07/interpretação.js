// 1. a) Explique o que o código faz. Qual o teste que ele realiza?
//ele recebe um numero em string e vai converter pra number e verifica se tem resto 0

//b) Para que tipos de números ele imprime no console "Passou no teste"?
//Ele imprime "Passou no teste" para números pares, ou seja, números que têm resto 0 quando divididos por 2.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//impares


//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// a) Para que sirva o código acima?
//para mostrar o preço de cada fruta

// b) Qual será a mensagem impressa no console, se o valor da fruta for "Maçã"?
//Se o valor da variável fruta for "Maçã", o código atribuirá o preço de 2.25 à variável preco e então imprimirá a mensagem no console.

//c)Considera que um usuário deseja comprar uma Pêra, qual seria a mensagem impressa no console se retiraríamos ou que breakestá logo acima do default(o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//Se retirarmos o break logo acima do default (aquele indicado pelo comentário "BREAK PARA O ITEM c."), o código não parará a execução do switch nesse ponto e continuará executando os casos abaixo. Nesse caso, se o usuário desejar comprar uma Pêra, o código atribuirá o preço de 5.5 à variável preco e então imprimirá a mensagem no console.


//3) Leia o código abaixo:
//a) O que a primeira linha está fazendo?
//A primeira linha está convertendo a string "50" em um número, utilizando a função Number(). Portanto, a constante numero terá o valor numérico 50.

//b) Considere um usuário digitado o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Se um usuário digitou o número 10, a mensagem do terminal será: "Esse número passou no teste". No entanto, se o número digitado for -10, nenhuma mensagem será exibida, pois a condição no if não será verdadeira.

//c) Haverá algum erro no console?
//Sim. Isso ocorre porque a variável mensagem está declarada dentro do bloco if, tornando-a inacessível fora desse bloco. Ao tentar acessar mensagem fora do bloco if, será exibido um erro indicando que mensagem não está definida.