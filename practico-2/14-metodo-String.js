const texto = "Hola Mundo";
console.log(texto.charAt(0)); // "H"

const saludo = "Hola ";
const mundo = "Mundo";
console.log(saludo.concat(mundo)); // "Hola Mundo"

const frase = "JavaScript es genial";
console.log(frase.includes("genial")); // true

const texto2 = "Bienvenido a JavaScript";
console.log(texto2.indexOf("JavaScript")); // 17

const mensaje = "Hola mundo";
console.log(mensaje.replace("mundo", "JavaScript")); // "Hola JavaScript"

const texto3 = "Hola Mundo";
console.log(texto3.slice(0, 4)); // "Hola"

const texto4 = "uno, dos, tres";
const array = texto4.split(", ");
console.log(array); // ["uno", "dos", "tres"]

const texto5 = "JavaScript";
console.log(texto5.toLowerCase()); // "javascript"

const texto6 = "javascript";
console.log(texto6.toUpperCase()); // "JAVASCRIPT"

const texto7 = "   Hola Mundo   ";
console.log(texto7.trim()); // "Hola Mundo"

const texto8 = "Hola Mundo";
console.log(texto8.length); // 10

const saludo2 = "Hola Mundo";
console.log(saludo2.startsWith("Hola")); // true

const saludo3 = "Hola Mundo";
console.log(saludo3.endsWith("Mundo")); // true

const cadena = "Hola";
console.log(typeof cadena); // "string"

const cadenaObjeto = new String("Hola");
console.log(typeof cadenaObjeto); // "object"
