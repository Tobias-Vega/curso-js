const nuevoArray = array.map((elemento, índice, array) => {
    return // Valor modificado
});

const numeros = [1, 2, 3, 4, 5];

// Multiplicamos cada número por 2
const duplicados = numeros.map(num => num * 2);

console.log(duplicados); //  [2, 4, 6, 8, 10]
console.log(numeros); //  [1, 2, 3, 4, 5]

const nombres = ["Ana", "Carlos", "Elena"];

const nombresMayus = nombres.map(nombre => nombre.toUpperCase());

console.log(nombresMayus); // ✅ ["ANA", "CARLOS", "ELENA"]

const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Tablet", precio: 700 }
];

  // Crear un nuevo array con los precios con descuento
    const productosConDescuento = productos.map(producto => ({
      ...producto, // Copia el objeto original
      precio: producto.precio * 0.9 // Aplica un 10% de descuento
    }));

    console.log(productosConDescuento);
    /*
    ✅ [
    { nombre: "Laptop", precio: 900 },
    { nombre: "Celular", precio: 450 },
    { nombre: "Tablet", precio: 630 }
    ]
  */

const numeros2 = [10, 20, 30];

const conIndices = numeros2.map((num, i) => `Índice ${i}: ${num}`);

console.log(conIndices); 
// ✅ ["Índice 0: 10", "Índice 1: 20", "Índice 2: 30"]
