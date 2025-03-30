const boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
alert("¡Botón clickeado!");
});

const mensaje = () => alert("¡Evento detectado!");

document.getElementById("miBoton").addEventListener("click", mensaje);

document.getElementById("miBoton").addEventListener("click", function(event) {
    console.log("Tipo de evento:", event.type);
    console.log("Elemento que disparó el evento:", event.target);
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto
    console.log("Formulario enviado");
});

document.getElementById("nombre").addEventListener("change", function(event) {
    console.log("Nuevo valor:", event.target.value);
});

document.getElementById("buscar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
    console.log("Buscando:", event.target.value);
    }
});