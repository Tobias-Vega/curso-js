const texto = "   Hola, mundo!   ";
const resultado = texto.trim();

console.log(resultado); // "Hola, mundo!"

const inputUsuario = "   Juan Pérez  ";
const nombreLimpio = inputUsuario.trim();

console.log(nombreLimpio); // "Juan Pérez"

const texto2 = "   Hola, mundo!   ";

console.log(texto2.trimStart()); // "Hola, mundo!   "
console.log(texto2.trimEnd());   // "   Hola, mundo!"
