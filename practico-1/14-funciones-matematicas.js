/*
🔹 Math.round(x) → Redondea un número al entero más cercano.
🔹 Math.floor(x) → Redondea hacia abajo (al entero menor).
🔹 Math.ceil(x) → Redondea hacia arriba (al entero mayor).
🔹 Math.trunc(x) → Elimina los decimales, dejando solo la parte entera. 
*/

console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.2));  // 5
console.log(Math.trunc(4.9)); // 4

/*
🔹 Math.pow(base, exponente) → Calcula la potencia de un número.
🔹 Math.sqrt(x) → Devuelve la raíz cuadrada de x.
🔹 Math.cbrt(x) → Devuelve la raíz cúbica de x. */

console.log(Math.pow(3, 4));  // 81 (3^4)
console.log(Math.sqrt(16));   // 4 (√16)
console.log(Math.cbrt(27));   // 3 (³√27)

/*
🔹 Math.min(a, b, c, ...) → Devuelve el número más pequeño de la lista.
🔹 Math.max(a, b, c, ...) → Devuelve el número más grande de la lista.
*/

console.log(Math.min(3, 1, 7, 0, -5));  // -5
console.log(Math.max(3, 1, 7, 0, -5));  // 7

// 🔹 Math.abs(x) → Devuelve el valor absoluto de x (sin signo).

console.log(Math.abs(-10)); // 10
console.log(Math.abs(7.5)); // 7.5

// 🔹 Math.random() → Genera un número decimal aleatorio entre 0 y 1 (sin incluir el 1).

let min = 5, max = 15;
let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(aleatorio); // Número entre 5 y 15

/*
🔹 Math.sin(x), Math.cos(x), Math.tan(x) → Funciones trigonométricas (en radianes).
🔹 Math.asin(x), Math.acos(x), Math.atan(x) → Funciones inversas.
🔹 Math.PI → Valor de π.
*/

console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // 1

/*
🔹 Math.log(x) → Logaritmo natural (base e).
🔹 Math.log10(x) → Logaritmo en base 10.
🔹 Math.exp(x) → Exponencial (e^x).
*/

console.log(Math.log(Math.E));   // 1 (ln(e) = 1)
console.log(Math.log10(100));    // 2 (log10(100) = 2)
console.log(Math.exp(2));        // 7.389 (≈ e²)