//operador E (AND) &&
// retorna true se, e somente se, os todos booleanos envolvidor tambem forem true 

true && true//true
true && false //false
false && true //true
false && false //true 


const var1 = 50
const var2 = 50
const var3 = 25 

console.log(var1 === var2 && var1 > var3 && var1)

//antes de começar, crie 3 variaveis: a, b, c.
const v1 = true 
const v2 = false 
const v3 = true 

v1 && v2 //false  
v2 && v3 // false
v1 && v3 // true 
v1 && v2 && v3 // false 

console.log(v1 === v2 && v1 > v3 && v1)

// operador OU (or) ||
