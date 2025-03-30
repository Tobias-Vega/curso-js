/* 
📌 Características de localStorage
✅ Guarda datos en el navegador de manera persistente.
✅ Solo almacena cadenas de texto (strings).
✅ Tiene un límite de aproximadamente 5MB por dominio.
✅ Los datos no se eliminan al cerrar la pestaña o reiniciar el navegador.
*/

// 🏷️ Guardar Datos con setItem()
localStorage.setItem("nombre", "Juan");

//Obtener datos
const nombre = localStorage.getItem("nombre");
console.log(nombre); // "Juan"

// Eliminar dato
localStorage.removeItem("nombre");

//Eliminar todos los datos
localStorage.clear();


//Almacenar objetos JSON
const usuario = { nombre: "Ana", edad: 25 };
localStorage.setItem("usuario", JSON.stringify(usuario));

// 🔍 Recuperar el Objeto con JSON.parse()
const datos = JSON.parse(localStorage.getItem("usuario"));
console.log(datos.nombre); // "Ana"
console.log(datos.edad);   // 25

document.querySelector("button").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    localStorage.setItem("usuario", nombre);
    alert("Nombre guardado!");
});

document.addEventListener("DOMContentLoaded", () => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
    document.querySelector("#saludo").textContent = `¡Hola, ${usuario}!`;
    }
});
