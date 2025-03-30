array.every(callback(elemento, índice, array))

/*
📌 Parámetros:

callback → Función que se ejecuta en cada elemento del array.
elemento → El elemento actual que se está evaluando.
índice (opcional) → La posición del elemento en el array.
array (opcional) → El array completo.
📌 Retorna:

true si todos los elementos cumplen la condición.
false si alguno no la cumple.
*/

let numeros = [2, 4, 6, 8, 10];
let todosPositivos = numeros.every(num => num > 0);

console.log(todosPositivos); // true

let edades = [25, 30, 17, 40];
let todosMayoresDe18 = edades.every(edad => edad >= 18);

console.log(todosMayoresDe18); // false

let palabras = ["hola", "mundo", "JS", "code"];
let sonLargas = palabras.every(palabra => palabra.length > 3);

console.log(sonLargas); // false (porque "JS" tiene solo 2 letras)

let usuarios = [
    { nombre: "Juan", activo: true },
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: false }
];

let todosActivos = usuarios.every(user => user.activo);

console.log(todosActivos); // false

let valores = [10, 15, 20, 25];

console.log(valores.every(num => num > 5)); // true (todos son mayores que 5)
console.log(valores.some(num => num > 20)); // true (porque al menos uno lo es)
