const div = document.getElementById("contenedor");
div.insertAdjacentHTML("beforebegin", "<p>Texto antes del div</p>");

const div2 = document.getElementById("contenedor");
div2.insertAdjacentHTML("afterbegin", "<strong>¡Inicio!</strong>");

const div3 = document.getElementById("contenedor");
div3.insertAdjacentHTML("beforeend", "<strong>¡Final!</strong>");

const div4 = document.getElementById("contenedor");
div4.insertAdjacentHTML("afterend", "<p>Texto después del div</p>");