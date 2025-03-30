function saludar() {
    console.log("Hola, usuario!")
}

saludar();

function sumar(a, b) {
    let resultado = a + b;
    console.log("El resultado de la suma es:", resultado);
}

sumar(5, 3);

function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(4, 5);
console.log("El resultado de la multiplicación es:", resultado);

function obtenerSaludo() {
    return "¡Bienvenido!";
}

let saludo = obtenerSaludo();
console.log(saludo);