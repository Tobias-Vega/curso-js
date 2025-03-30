array.forEach((elemento, índice, array) => {
    // Código a ejecutar
});

const frutas = ["🍎 Manzana", "🍌 Banana", "🍊 Naranja"];

frutas.forEach(fruta => console.log(fruta));

// 🍎 Manzana
// 🍌 Banana
// 🍊 Naranja

const nombres = ["Ana", "Carlos", "Elena"];

nombres.forEach((nombre, i) => console.log(`${i}: ${nombre}`));

// 0: Ana
// 1: Carlos
// 2: Elena

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((num, i, arr) => {
    arr[i] = num * 2; // Multiplicamos cada número por 2
});

console.log(numeros); // ✅ [2, 4, 6, 8, 10]

const precios = [100, 200, 300];
let total = 0;

precios.forEach(precio => total += precio);

console.log(total); // ✅ 600
