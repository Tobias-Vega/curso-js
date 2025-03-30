const numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros);
// [5, 4, 3, 2, 1]

const texto = "JavaScript";
const textoInvertido = texto.split("").reverse().join("");
console.log(textoInvertido);
// "tpircSavaJ"

const fechas = ["2024-01-01", "2023-05-15", "2022-08-20"];
fechas.reverse();
console.log(fechas);
// ["2022-08-20", "2023-05-15", "2024-01-01"]

const original = [1, 2, 3, 4, 5];
const invertido = [...original].reverse();

console.log(original);   // [1, 2, 3, 4, 5] (sin cambios)
console.log(invertido);  // [5, 4, 3, 2, 1] (invertido)
