const readline = require("readline");
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

function Usuario() {
    
    rl.question("usuario ", (Usuario) => {
    
        const login = "Erica"
    
    if ( login === Usuario){console.log("login bem-sucedido")}
    else {console.log("login negado")}
    
    
    });
    }

function senha() {

rl.question("senha do usuario ", (senhaUsuario) => {

    const senha = "13"

if (senha === senhaUsuario){console.log("login bem-sucedido")}
else {console.log("login negado")}

    rl.close();
});
}

Usuario()
senha()