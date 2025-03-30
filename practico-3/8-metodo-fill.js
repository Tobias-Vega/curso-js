array.fill(valor, inicio, fin,)

/*
📌 Parámetros:
valor → El valor con el que se llenará el array.
inicio (opcional) → Índice desde donde se empieza a rellenar (por defecto 0).
fin (opcional) → Índice hasta donde se rellena (sin incluir) (por defecto, el final del array).
📌 Retorna:

Modifica el array original y lo devuelve con los nuevos valores.
*/

let numeros = [1, 2, 3, 4, 5];
numeros.fill(0);
console.log(numeros); // [0, 0, 0, 0, 0]

let letras = ['a', 'b', 'c', 'd', 'e'];
letras.fill('x', 1, 4);
console.log(letras); // ['a', 'x', 'x', 'x', 'e']

let vacio = new Array(5).fill(7);
console.log(vacio); // [7, 7, 7, 7, 7]

let objetosCorrectos = new Array(3).fill(null).map(() => ({ nombre: "Juan" }));
objetosCorrectos[0].nombre = "Pedro";
console.log(objetosCorrectos);
// [{nombre: "Pedro"}, {nombre: "Juan"}, {nombre: "Juan"}]
