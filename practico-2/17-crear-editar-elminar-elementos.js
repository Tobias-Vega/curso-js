// Crear un nuevo elemento <p>
const nuevoParrafo = document.createElement("p");

// Crear contenido para el parrafo
const texto = document.createTextNode("Este es un nuevo párrafo.");

// Agregar el texto al nuevo párrafo
nuevoParrafo.appendChild(texto);

// Agregar el párrafo al body
document.body.appendChild(nuevoParrafo);

const parrafo = document.querySelector("p");
parrafo.textContent = "Este párrafo ha sido editado.";

const imagen = document.querySelector("img");
imagen.setAttribute("src", "nueva-imagen.jpg"); // Cambiar el atributo src
imagen.setAttribute("alt", "Descripción de la nueva imagen"); // Cambiar el atributo alt

const parrafo = document.querySelector("p");
parrafo.remove(); // Elimina el primer <p> encontrado

const contenedor = document.querySelector("#contenedor");
const parrafo = document.querySelector("p");
contenedor.removeChild(parrafo); // Elimina el primer <p> dentro de #contenedor
