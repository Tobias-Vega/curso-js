const set = new Set([iterable]);
// iterable: Un objeto iterable (como un array) cuyos elementos se agregarán al Set. Este parámetro es opcional.

const numeros = new Set([1, 2, 3, 4, 5]);

console.log(numeros); // Set { 1, 2, 3, 4, 5 }

const numeros2 = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(3); // Este no se agregará, ya que 3 ya está en el Set.

console.log(numeros2); // Set { 1, 2, 3 }

const numeros3 = new Set([1, 2, 3, 4, 5]);

numeros.delete(3); // Elimina el valor 3

console.log(numeros3); // Set { 1, 2, 4, 5 }

const numeros4 = new Set([1, 2, 3, 4, 5]);

console.log(numeros4.has(3)); // true
console.log(numeros4.has(6)); // false

const numeros5 = new Set([1, 2, 3]);

numeros5.forEach(function(valor) {
    console.log(valor);
});
// 1
// 2
// 3

const numeros6 = new Set([1, 2, 3]);

for (let numero of numeros6) {
    console.log(numero);
}
// 1
// 2
// 3

const numeros7 = new Set([1, 2, 3]);

numeros.clear();

console.log(numeros7); // Set {}


const numeros8 = new Set([1, 2, 3]);

const array = [...numeros8];

console.log(array); // [1, 2, 3]

const array2 = Array.from(numeros);

console.log(array2); // [1, 2, 3]

const numerosConDuplicados = [1, 2, 2, 3, 4, 4, 5];

const numerosUnicos = [...new Set(numerosConDuplicados)];

console.log(numerosUnicos); // [1, 2, 3, 4, 5]
