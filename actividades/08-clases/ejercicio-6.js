class Grupo {
  constructor() {
    this.miembros = []
  }

  agregarMiembros(nombre) {
    this.miembros.push(nombre);
  }

  listarMiembros() {
    this.miembros.forEach(el => console.log(el));
  }
}

const grupo1 = new Grupo();

grupo1.agregarMiembros("Juan");
grupo1.agregarMiembros("María");
grupo1.agregarMiembros("Carlos");

grupo1.listarMiembros();
