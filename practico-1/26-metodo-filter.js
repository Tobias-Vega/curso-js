const nuevoArray = array.filter(callback);

const numeros = [10, 25, 30, 40, 50];

// Filtrar números mayores a 20
const mayoresDe20 = numeros.filter(num => num > 20);

console.log(mayoresDe20); // ✅ [25, 30, 40, 50]

const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Tablet", precio: 700 }
];

// Filtrar productos con precio mayor a 600
const productosCaros = productos.filter(producto => producto.precio > 600);

console.log(productosCaros);
/*
✅ [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Tablet", precio: 700 }
]
*/

const palabras = ["manzana", "banana", "naranja", "uva"];

// Filtrar palabras que contienen "na"
const resultado = palabras.filter(palabra => palabra.includes("na"));

console.log(resultado); // ✅ ["banana", "naranja"]


const valores = [0, "Hola", "", null, 42, undefined, "JavaScript"];

const valoresValidos = valores.filter(Boolean);

console.log(valoresValidos); // ✅ ["Hola", 42, "JavaScript"]
