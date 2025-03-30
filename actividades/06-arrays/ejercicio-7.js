const numeros = [2, 4, 6, 8, 10];

const sonPares = numeros.every(num => num % 2 === 0);
console.log(sonPares);

const esMayorQue8 = numeros.some(num => num > 8);

console.log(esMayorQue8)