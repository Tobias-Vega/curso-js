const numeros = new Set([1, 2, 3, 4, 5]);

console.log(numeros.size); // 5

const numeros2 = new Set([1, 2, 3, 4, 5, 5, 3]);

console.log(numeros2.size); // 5

const numerosVacios = new Set();

console.log(numerosVacios.size); // 0
