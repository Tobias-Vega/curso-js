let temperatura = 15;
let humedad = 40;

if (temperatura >= 20 && temperatura <= 25 && humedad < 60) {
  console.log("Condiciones óptimas");
} else if (temperatura > 30 || humedad >= 80) {
  console.log("Condiciones extremas");
} else {
  console.log("Condiciones moderadas");
}