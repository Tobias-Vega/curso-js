const persona = {
    "nombre": "Carlos",
    "edad": 30,
    "ciudad": "Madrid",
    "hobbies": ["fútbol", "lectura", "viajes"],
    "activo": true
}

// Objeto en JavaScript
const usuario = {
    nombre: "Carlos",
    edad: 30
};

  // JSON (cadena de texto)
const usuarioJSON = '{ "nombre": "Carlos", "edad": 30 }';

const persona2 = { nombre: "Ana", edad: 25 };

const jsonString = JSON.stringify(persona2);
console.log(jsonString);
// '{"nombre":"Ana","edad":25}'  (formato JSON en string)

const datos = '{"nombre":"Ana","edad":25}';

const persona3 = JSON.parse(datos);
console.log(persona3.nombre); // "Ana"
console.log(persona3.edad);   // 25

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json()) // Convertir JSON a objeto
    .then(data => console.log(data.nombre)) // Acceder a la información
    .catch(error => console.error("Error:", error));
