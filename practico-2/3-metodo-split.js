cadena.split(separador, límite);

/*
separador (opcional): Especifica dónde dividir la cadena. Puede ser un carácter, una cadena o una expresión regular.
límite (opcional): Número máximo de elementos en el array resultante.
*/

const texto = "Hola mundo JavaScript";
const palabras = texto.split(" ");
console.log(palabras);
// ["Hola", "mundo", "JavaScript"]

const lista = "manzana,pera,banana,naranja";
const frutas = lista.split(",");
console.log(frutas);
// ["manzana", "pera", "banana", "naranja"]

const texto2 = "JavaScript es increíble";
const resultado = texto2.split(" ", 2);
console.log(resultado);
// ["JavaScript", "es"]

const palabra = "Hola";
const letras = palabra.split("");
console.log(letras);
// ["H", "o", "l", "a"]

const frase = "  Hola  mundo  ";
const palabras2 = frase.trim().split(/\s+/);
console.log(palabras2);
// ["Hola", "mundo"]

const frase2 = "JavaScript es genial";
const palabras3 = frase2.split(" ");
const nuevaFrase = palabras3.join("-");
console.log(nuevaFrase);
// "JavaScript-es-genial"
