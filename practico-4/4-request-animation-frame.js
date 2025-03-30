requestAnimationFrame(callback);


function animar() {
    console.log("Animando...");
    requestAnimationFrame(animar); // Llama a la función en el próximo frame
}
animar();

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

let x = 50;
let velocidad = 2;

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Borra el canvas

  ctx.beginPath();
  ctx.arc(x, 100, 30, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();

  x += velocidad; // Mueve el círculo a la derecha

  if (x > canvas.width || x < 0) {
    velocidad *= -1; // Invierte la dirección
  }

  requestAnimationFrame(animar); // Llama a la siguiente animación
}

animar(); // Inicia la animación


const canvas2 = document.getElementById("miCanvas");
const ctx2 = canvas.getContext("2d");

let x1 = 50;
let animacionID;

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, 100, 30, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  
  x += 2;
  animacionID = requestAnimationFrame(animar);
}

document.getElementById("start").addEventListener("click", () => {
  if (!animacionID) animar();
});

document.getElementById("stop").addEventListener("click", () => {
  cancelAnimationFrame(animacionID);
  animacionID = null;
});

let ultimaEjecucion = 0;
const fps = 30; // Queremos 30 FPS

function animar(timestamp) {
  const tiempoTranscurrido = timestamp - ultimaEjecucion;

  if (tiempoTranscurrido >= 1000 / fps) {
    ultimaEjecucion = timestamp;
    console.log("Frame ejecutado");
  }

  requestAnimationFrame(animar);
}

requestAnimationFrame(animar);
