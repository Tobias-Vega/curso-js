// Spread en Arreglos
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copia el arreglo arr1 en arr2
console.log(arr2); // [1, 2, 3]

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = [...arr1, ...arr2]; // Combina arr1 y arr2
console.log(arr5); // [1, 2, 3, 4, 5, 6]

const arr6 = [1, 2, 3];
const newArr = [...arr6, 4, 5]; // Agrega 4 y 5 al final
console.log(newArr); // [1, 2, 3, 4, 5]

// Spread en Objectos
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // Copia las propiedades de obj1 en obj2
console.log(obj2); // { a: 1, b: 2 }

const obj3 = { a: 1, b: 2 };
const obj4 = { ...obj1, b: 3, c: 4 }; // Actualiza 'b' y agrega 'c'
console.log(obj4); // { a: 1, b: 3, c: 4 }

const obj5 = { a: 1, b: 2 };
const obj6 = { c: 3, d: 4 };
const combined = { ...obj5, ...obj6 }; // Combina las propiedades de obj1 y obj2
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }

// Spread en funciones
const numbers = [1, 2, 3, 4];
const sum = (a, b, c, d) => a + b + c + d;
console.log(sum(...numbers)); // 10

// Spread en objectos anidados
const obj7 = { a: 1, b: { c: 2 } };
const obj8 = { ...obj7 };

obj8.b.c = 3;
console.log(obj7.b.c); // 3 (cambio afectado en ambos objetos)
