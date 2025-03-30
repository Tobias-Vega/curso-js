// Acceder por ID
const titulo = document.getElementById("titulo");

// Acceder por clase
const items = document.getElementsByClassName("lista-item");
console.log(items[0]);

// Acceder por nombre de etiqueta
const parrafos = document.getElementsByTagName("p");
console.log(parrafos[0]);

// Seleccionar el primer elemento que coincida con un selector CSS
const parrafo2 = document.querySelector("p");
console.log(parrafo2);
let elemento = document.querySelector("#miTitulo");  // Por ID
let item = document.querySelector(".lista-item");  // Por clase

// Seleccionar todos los elementos que coincidan con un selector CSS y devuelve un Node List
const items2 = document.querySelectorAll(".lista-item");
console.log(items2)