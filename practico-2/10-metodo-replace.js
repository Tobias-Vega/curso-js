const texto = "Hola mundo";
const resultado = texto.replace("mundo", "JavaScript");

console.log(resultado); // "Hola JavaScript"

const frase = "JavaScript es genial. Me encanta JavaScript!";
const nuevaFrase = frase.replace(/JavaScript/g, "JS");

console.log(nuevaFrase); // "JS es genial. Me encanta JS!"

const texto2 = "El precio es de 100 dólares";
const nuevoTexto = texto2.replace(/\d+/g, "XXX");

console.log(nuevoTexto); // "El precio es de XXX dólares"

const mensaje = "Hola JUAN";
const resultado2 = mensaje.replace(/JUAN/, (match) => match.toLowerCase());

console.log(resultado2); // "Hola juan"
