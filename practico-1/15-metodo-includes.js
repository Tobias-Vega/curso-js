const numeros = [1, 2, 3, 4, 5];

console.log(numeros.includes(3));  // true
console.log(numeros.includes(10)); // false

const frutas = ["manzana", "pera", "uva"];

console.log(frutas.includes("pera"));     // true
console.log(frutas.includes("banana"));   // false

const numeros2 = [10, 20, 30, 40, 50];

console.log(numeros2.includes(20, 2)); // false (porque empieza a buscar desde el índice 2)
console.log(numeros2.includes(30, 2)); // true

const mensaje = "Hola, bienvenido a JavaScript";

console.log(mensaje.includes("bienvenido")); // true
console.log(mensaje.includes("python"));     // false

const mensaje2 = "Aprender JavaScript es divertido";

console.log(mensaje2.includes("JavaScript", 10)); // true
console.log(mensaje2.includes("Aprender", 10));   // false (porque empieza desde el índice 10)