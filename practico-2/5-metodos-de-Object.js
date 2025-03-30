const usuario = new Object();
usuario.nombre = "Ana";
usuario.edad = 25;
console.log(usuario);

const prototipo = { saludar() { console.log("Hola"); } };
const objeto = Object.create(prototipo);
objeto.saludar(); // "Hola"

const usuario = { nombre: "Carlos", edad: 28 };
console.log(Object.keys(usuario));
// ["nombre", "edad"]

console.log(Object.values(usuario));
// ["Carlos", 28]

console.log(Object.entries(usuario));
// [["nombre", "Carlos"], ["edad", 28]]

const datos = { profesion: "Ingeniero" };
const persona = Object.assign({}, usuario, datos);
console.log(persona);
// { nombre: "Carlos", edad: 28, profesion: "Ingeniero" }

const coche = { marca: "Toyota" };
Object.freeze(coche);
coche.marca = "Honda"; // No cambia
console.log(coche); // { marca: "Toyota" }

const producto = { nombre: "Laptop", precio: 1000 };
Object.seal(producto);
producto.precio = 900;  // ✅ Se puede modificar
producto.stock = 10;    // ❌ No se puede agregar
console.log(producto);

console.log(Object.hasOwn(usuario, "edad")); // true
console.log(Object.hasOwn(usuario, "salario")); // false
