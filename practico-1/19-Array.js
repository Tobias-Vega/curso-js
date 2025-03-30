let numeros = new Array(1, 2, 3, 4, 5);
let vacio = new Array(3); // Crea un array con 3 posiciones vacías
console.log(vacio)

let texto = "Hola";
let arrayLetras = Array.from(texto);
console.log(arrayLetras); // ["H", "o", "l", "a"]

let botones = document.querySelectorAll("button"); // Devuelve una NodeList
let arrayBotones = Array.from(botones);
console.log(arrayBotones); // Ahora es un array real con métodos como .map(), .filter()
