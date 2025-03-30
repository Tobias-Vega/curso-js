array.find(callback(elemento, indice, array))

/*
📌 callback: Función que se ejecuta en cada elemento del array.
📌 elemento: Cada elemento del array sobre el que se ejecuta la función.
📌 indice (opcional): La posición del elemento en el array.
📌 array (opcional): El array sobre el que se ejecuta find().
*/

const numeros = [10, 20, 30, 40, 50];

const encontrado = numeros.find(num => num > 25);

console.log(encontrado); // 30 (porque es el primer número mayor a 25)

const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Maria" },
    { id: 3, nombre: "Pedro" }
];

const usuarioEncontrado = usuarios.find(user => user.id === 2);

console.log(usuarioEncontrado); // { id: 2, nombre: "Maria" }

const palabras = ["manzana", "banana", "pera", "uva"];

const fruta = palabras.find(palabra => palabra.startsWith("b"));

console.log(fruta); // "banana" (porque es la primera palabra que empieza con "b")

const numeros2 = [1, 3, 5, 7];

const resultado = numeros2.find(num => num % 2 === 0);

console.log(resultado); // undefined (porque no hay números pares)
