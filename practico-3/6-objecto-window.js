console.log(window); // Muestra el objeto `window` en la consola del navegador

console.log(window.document); // Accede al DOM de la página
console.log(document); // `document` es lo mismo que `window.document`

window.alert("¡Hola, mundo!");
alert("¡Bienvenido!");

window.console.log("Hola desde la consola");
console.log("Esto también funciona");

console.log(window.innerWidth); // Ancho de la ventana
console.log(window.innerHeight); // Alto de la ventana

console.log(window.location.href); // URL actual
console.log(window.location.hostname); // Dominio (ejemplo.com)
console.log(window.location.pathname); // Ruta (/contacto)

console.log(window.navigator.userAgent); // Información del navegador
console.log(window.navigator.language); // Idioma del usuario

window.history.back(); // Ir a la página anterior
window.history.forward(); // Ir a la siguiente página

window.setTimeout(() => {
    console.log("Esto se ejecuta después de 3 segundos");
}, 3000);

window.setInterval(() => {
    console.log("Esto se ejecuta cada 2 segundos");
}, 2000);

window.localStorage.setItem("nombre", "Juan");
console.log(window.localStorage.getItem("nombre")); // "Juan"
