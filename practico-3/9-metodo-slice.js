array.slice(inicio, fin)

/*
📌 Parámetros:

inicio (opcional) → Índice donde comienza la extracción (incluido). Si se omite, empieza desde 0.
fin (opcional) → Índice donde termina la extracción (no incluido). Si se omite, extrae hasta el final.
📌 Retorna:

Un nuevo array con los elementos extraídos.
No modifica el array original.
*/

let frutas = ["manzana", "pera", "uva", "mango", "naranja"];
let resultado = frutas.slice(1, 4);

console.log(resultado); // ["pera", "uva", "mango"]
console.log(frutas); // ["manzana", "pera", "uva", "mango", "naranja"] (no cambia)

let copia = frutas.slice();
console.log(copia); // ["manzana", "pera", "uva", "mango", "naranja"]

let ultimos = frutas.slice(-2);
console.log(ultimos); // ["mango", "naranja"]

let desdeTres = frutas.slice(3);
console.log(desdeTres); // ["mango", "naranja"]

let texto = "JavaScript";
let subcadena = texto.slice(0, 4);
console.log(subcadena); // "Java"
