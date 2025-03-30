let saludo = "Hola ";

let resultado = saludo.repeat(3);

console.log(resultado); // "Hola Hola Hola "

let mensaje = "¡Bienvenido! ";

resultado = mensaje.repeat(0);

console.log(resultado); // ""

let texto = "Error ";

resultado = texto.repeat(-2); // Esto genera un RangeError