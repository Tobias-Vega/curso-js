class Animal {
  constructor(nombre) {
    this.nombre = nombre
  }

  hablar() {
    console.log("el animal hace un sonido")
  }
}

class Perro extends Animal {
  hablar() {
    console.log("el perro ladra")
  }
}

const animal1 = new Animal("Vaca");
animal1.hablar();
const perro = new Perro("Numa")
perro.hablar();