array.some(callback(element, index, array), thisArg);

/*
callback: Función que se ejecuta sobre cada elemento del array. Recibe tres parámetros:
element: El elemento actual que se está procesando en el array.
index (opcional): El índice del elemento actual.
array (opcional): El array sobre el que se está llamando el método.
thisArg (opcional): Valor que se usará como this cuando se ejecute el callback.
*/

const numeros = [3, 7, 15, 5, 2];

const hayMayorQueDiez = numeros.some(numero => numero > 10);

console.log(hayMayorQueDiez); // true

const usuarios = [
    { nombre: "Juan", activo: false },
    { nombre: "Maria", activo: false },
    { nombre: "Carlos", activo: true }
    ];

const hayUsuarioActivo = usuarios.some(usuario => usuario.activo);

console.log(hayUsuarioActivo); // true
