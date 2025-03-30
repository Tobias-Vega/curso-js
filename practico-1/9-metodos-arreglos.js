const frutas1 = ["manzana", "naranja", "plátano"];

const nuevaLongitud = frutas.push("uva");

console.log(frutas); // ["manzana", "naranja", "plátano", "uva"]
console.log(nuevaLongitud); // 4

const frutas2 = ["manzana", "naranja", "plátano", "uva"];

const ultimaFruta = frutas.pop();

console.log(frutas); // ["manzana", "naranja", "plátano"]
console.log(ultimaFruta); // "uva"

const frutas3 = ["manzana", "naranja", "plátano", "uva"];

const primeraFruta = frutas.shift();

console.log(frutas); // ["naranja", "plátano", "uva"]
console.log(primeraFruta); // "manzana"

const frutas4 = ["naranja", "plátano", "uva"];

const nuevaLongitud2 = frutas.unshift("manzana");

console.log(frutas); // ["manzana", "naranja", "plátano", "uva"]
console.log(nuevaLongitud); // 4