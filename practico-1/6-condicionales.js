let edad = 18;

if (edad >= 18) {
    console.log("Es mayor de edad");
}

edad = 16;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

let hora = 10;
if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

edad = 20;
let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";

let numero = 10;
if (numero === 10) {
    console.log("El número es 10");
} else {
    console.log("El número no es 10");
}

edad = 20;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}