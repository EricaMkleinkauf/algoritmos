function verificarNum (numero) {
    if (numero % 2 === 0) {
        return true; //se o numero for par
    }else {
        return false; //se o numero for impar
    }
}

let resultado = verificarNum (18);
console.log(resultado)