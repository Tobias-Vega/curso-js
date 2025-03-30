const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d"); // Contexto 2D

ctx.fillStyle = "blue"; // Color de relleno
ctx.fillRect(50, 50, 150, 100); // (x, y, ancho, alto)

ctx.strokeStyle = "red"; // Color del borde
ctx.lineWidth = 5; // Grosor del borde
ctx.strokeRect(200, 50, 150, 100); // (x, y, ancho, alto)

ctx.beginPath(); // Inicia un nuevo trazo
ctx.moveTo(50, 200); // Punto de inicio (x, y)
ctx.lineTo(250, 200); // Punto final (x, y)
ctx.stroke(); // Dibuja la línea

ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI * 2); // (x, y, radio, ángulo inicial, ángulo final)
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();

ctx.font = "30px Arial"; // Fuente y tamaño
ctx.fillStyle = "black";
ctx.fillText("¡Hola Canvas!", 100, 250);

const img = new Image();
img.src = "imagen.jpg"; // URL de la imagen
img.onload = function () {
  ctx.drawImage(img, 100, 50, 200, 150); // (x, y, ancho, alto)
};


let x = 50;
function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Borra el canvas
  ctx.beginPath();
  ctx.arc(x, 150, 30, 0, Math.PI * 2);
  ctx.fill();
  x += 2; // Mueve el círculo a la derecha
  requestAnimationFrame(animar);
}
animar();


canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`Clic en: ${x}, ${y}`);
  });
  