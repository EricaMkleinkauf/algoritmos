const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let idade
rl.question(`qual a idade do usuário: `, (idade) => {
    let maior18 = 18 

    if (idade>= maior18){
        console.log("maior de idade")
    }else {console.log("não é maior de idade")}
    ;
    rl.close();
});
