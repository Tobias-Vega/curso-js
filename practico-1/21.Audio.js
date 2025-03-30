const audio = new Audio()

audio.src = "miAudio.mp3";
audio.play();

audio.currentTime = 10; // Empieza en el segundo 10

audio.volume = 0.5; // Volumen al 50%

audio.muted = true;  // Silencia el audio
audio.muted = false; // Reactiva el sonido

audio.loop = true;

audio.playbackRate = 1.5; // 1.5x más rápido

audio.addEventListener("ended", () => {
    console.log("El audio ha terminado.");
});

audio.addEventListener("timeupdate", () => {
    console.log(`Tiempo actual: ${audio.currentTime} segundos`);
});

audio.addEventListener("canplay", () => {
    console.log("El audio está listo para reproducirse.");
});

audio.addEventListener("error", () => {
    console.log("Error al cargar el audio.");
});
