const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "desarrollador",
    saludar: function() {
    console.log("¡Hola, " + this.nombre + "!");
    }
};

  console.log(persona.nombre);  // "Juan"
  console.log(persona["edad"]); // 30
  persona.saludar(); // "¡Hola, Juan!"

let objeto = { clave: "valor" };

console.log(objeto.clave);       // "valor"
console.log(objeto["clave"]);    // "valor"

let persona2 = {
    nombre: "Juan",
    edad: 30
};
  persona.edad = 31;          // Cambiar edad usando notación de punto
  persona["nombre"] = "Carlos"; // Cambiar nombre usando notación de corchetes
  console.log(persona); // { nombre: "Carlos", edad: 31 }

let coche = {
    marca: "Toyota",
    modelo: "Corolla"
};

  // Añadir una nueva propiedad
coche.color = "rojo";
coche["año"] = 2020;

console.log(coche);
  // { marca: "Toyota", modelo: "Corolla", color: "rojo", año: 2020 }

let persona3 = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

  delete persona.edad;  // Elimina la propiedad "edad"
  console.log(persona); // { nombre: "Ana", ciudad: "Madrid" }

const calculadora = {
    numero1: 10,
    numero2: 5,
    sumar: function() {
    return this.numero1 + this.numero2;
    },
    restar: function() {
    return this.numero1 - this.numero2;
    }
};

  console.log(calculadora.sumar());  // 15
  console.log(calculadora.restar()); // 5

let clave = "nombre";
let objeto2 = {};

objeto2[clave] = "Carlos";

console.log(objeto2.nombre);  // "Carlos"

const persona4 = {
    nombre: "María",
    edad: 28,
    ciudad: "Barcelona"
};

const { nombre, edad } = persona4;
  console.log(nombre); // "María"
  console.log(edad);   // 28