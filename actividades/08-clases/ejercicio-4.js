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

  cumplirAnios() {
    return this.edad += 1;
  }
}

const persona1 = new Persona("Tobias", 19);

console.log(persona1.cumplirAnios());
console.log(persona1.cumplirAnios());
