class Persona {
  constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
  }

  // Método de la clase
  saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años de edad.`)
  }
}

// Crea una instancia de la clase
const persona1 = new Persona("Carlos", 30);
persona1.saludar(); // Hola, mi nombre es Carlos y tengo 30 años de edad.

/*
Los métodos dentro de una clase pueden ser de dos tipos:

Métodos de instancia: Se llaman desde objetos creados a partir de la clase.
Métodos estáticos: Se llaman directamente desde la clase sin necesidad de crear una instancia.
*/

class Calculadora {
  // Método de instancia
  sumar(a, b) {
      return a + b;
  }

  // Método estático
  static restar(a, b) {
      return a - b;
  }
}

const calc = new Calculadora();
console.log(calc.sumar(5, 3));

console.log(Calculadora.restar(10, 4));



class CuentaBancaria {
  #saldo = 0; // Propiedad privada

  constructor(titular) {
    this.titular = titular;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Depósito exitoso. Saldo actual: ${this.#saldo}`);
    }
  }

  retirar(monto) {
    if (monto > this.#saldo) {
      console.log("Fondos insuficientes.");
    } else {
      this.#saldo -= monto;
      console.log(`Retiro exitoso. Saldo actual: ${this.#saldo}`);
    }
  }
}

const cuenta = new CuentaBancaria("Juan");
cuenta.depositar(1000);
cuenta.retirar(500);

// Intento de acceder a una propiedad privada (error)
// console.log(cuenta.#saldo); // SyntaxError



class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log("El animal hace un sonido.");
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de la clase padre
    this.raza = raza;
  }

  hacerSonido() {
    console.log("Guau guau!"); // Sobrescribe el método
  }
}

const miPerro = new Perro("Firulais", "Labrador");
miPerro.hacerSonido(); // "Guau guau!"
console.log(miPerro.nombre); // "Firulais"
console.log(miPerro.raza); // "Labrador"


class Usuario {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre.toUpperCase(); // Devuelve el nombre en mayúsculas
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 2) {
      this._nombre = nuevoNombre;
    } else {
      console.log("El nombre es demasiado corto.");
    }
  }
}

const user = new Usuario("Pedro");
console.log(user.nombre); // "PEDRO"

user.nombre = "Jo"; // "El nombre es demasiado corto."
user.nombre = "Jorge";
console.log(user.nombre); // "JORGE"


console.log(miPerro instanceof Perro);  // true
console.log(miPerro instanceof Animal); // true
console.log(miPerro instanceof Object); // true