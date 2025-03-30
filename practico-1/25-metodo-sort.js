array.sort(comparador)
// 📌 comparador (opcional): Una función que define cómo se ordenarán los elementos.

const numeros = [100, 5, 20, 10];

numeros.sort(); 

console.log(numeros); // ❌ [10, 100, 20, 5] (orden incorrecto para números)

const numeros2 = [100, 5, 20, 10];

// Orden ascendente (de menor a mayor)
numeros.sort((a, b) => a - b);
console.log(numeros2); // ✅ [5, 10, 20, 100]

// Orden descendente (de mayor a menor)
numeros.sort((a, b) => b - a);
console.log(numeros2); // ✅ [100, 20, 10, 5]

const frutas = ["naranja", "manzana", "banana", "uva"];

frutas.sort();
console.log(frutas); // ✅ ["banana", "manzana", "naranja", "uva"]

const palabras = ["Hola", "mundo", "Adiós", "bienvenido"];

palabras.sort((a, b) => a.localeCompare(b));
console.log(palabras); // ✅ ["Adiós", "bienvenido", "Hola", "mundo"]

const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 40 }
];

// Ordenar por edad (de menor a mayor)
personas.sort((a, b) => a.edad - b.edad);

console.log(personas);
/*
✅ [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "Pedro", edad: 40 }
]
*/

const numeros3 = [100, 5, 20, 10];

const ordenado = [...numeros3].sort((a, b) => a - b);

console.log(ordenado); // ✅ [5, 10, 20, 100]
console.log(numeros3); // 🔴 [100, 5, 20, 10] (se mantiene igual)
