const nuevoString = array.join(separador);

// 📌 separador (opcional) → Especifica qué carácter o texto separará los elementos en la cadena resultante. Si no se proporciona, el separador por defecto es una coma (,).

const palabras = ["Hola", "mundo", "JavaScript"];

const resultado = palabras.join(); // Usa la coma por defecto

console.log(resultado); 
// ✅ "Hola,mundo,JavaScript"

const palabras2 = ["Hola", "mundo", "JavaScript"];

const resultado2 = palabras2.join(" ");

console.log(resultado2); 
// ✅ "Hola mundo JavaScript"

const numeros = [1, 2, 3, 4, 5];

const resultado3 = numeros.join(" - ");

console.log(resultado3); 
// ✅ "1 - 2 - 3 - 4 - 5"

const ruta = ["https:", "", "www.ejemplo.com", "blog", "articulo"];

const url = ruta.join("/");

console.log(url); 
// ✅ "https://www.ejemplo.com/blog/articulo"

const letras = ["H", "o", "l", "a"];

const palabra = letras.join("");

console.log(palabra); 
// ✅ "Hola"
