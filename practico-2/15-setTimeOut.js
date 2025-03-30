setTimeout(función, retardo, param1, param2,);

/*
función: La función o el código que se ejecutará después de que pase el retardo.
retardo: El tiempo de espera en milisegundos antes de que se ejecute la función.
param1, param2, ... (opcional): Argumentos que se pasan a la función cuando se ejecuta.
*/

console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Fin");

setTimeout(function() {
    console.log("¡Hola después de 3 segundos!");
}, 3000);
