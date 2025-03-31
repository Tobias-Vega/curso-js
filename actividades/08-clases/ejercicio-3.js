class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }
}

const persona1 = new Persona("Tobias", 19);

persona1.presentarse();
console.log(persona1.esMayorDeEdad());