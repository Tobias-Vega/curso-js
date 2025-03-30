array.reduce(callback(acumulador, elemento, indice, array), valorInicial);

/*
callback: Función que se ejecuta sobre cada elemento del array. Recibe cuatro parámetros:
acumulador: El valor acumulado hasta el momento. Este valor se actualiza en cada iteración.
elemento: El elemento actual del array que se está procesando.
indice (opcional): El índice del elemento actual.
array (opcional): El array sobre el que se está ejecutando reduce.
valorInicial (opcional): El valor con el que empezar el acumulador. Si no se proporciona, el acumulador tomará el valor del primer elemento del array.

*/

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(suma); // 15

const numeros2 = [1, 2, 3, 4];

const producto = numeros2.reduce(function(acumulador, numero) {
  return acumulador * numero;
}, 1);

console.log(producto); // 24

const productos = [
    { nombre: "Manzana", cantidad: 10 },
    { nombre: "Naranja", cantidad: 5 },
    { nombre: "Plátano", cantidad: 3 }
    ];

    const inventario = productos.reduce(function(acumulador, producto) {
    if (acumulador[producto.nombre]) {
        acumulador[producto.nombre] += producto.cantidad;
    } else {
        acumulador[producto.nombre] = producto.cantidad;
    }
    return acumulador;
}, {});

console.log(inventario);
// { Manzana: 10, Naranja: 5, Plátano: 3 }
