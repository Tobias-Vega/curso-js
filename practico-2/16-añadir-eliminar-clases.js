const elemento = document.querySelector("#miElemento");
elemento.classList.add("claseNueva");

const elemento2 = document.querySelector("#miElemento");
elemento2.classList.remove("claseEliminar");

const elemento3 = document.querySelector("#miElemento");
console.log(elemento3.classList.contains("claseExistente")); // true o false

const elemento4 = document.querySelector("#miElemento");
elemento4.classList.toggle("claseToggle");

const elemento5 = document.querySelector("#miElemento");
console.log(elemento5.classList.item(0)); // Muestra el nombre de la primera clase

const elemento6 = document.querySelector("#miElemento");
console.log(elemento6.classList.length); // Número de clases
