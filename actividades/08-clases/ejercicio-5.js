class Estudiante {
  constructor(nombre, nota){
    this.nombre = nombre;
    this.nota = nota;
  }

  resultado() {
    return this.nota >= 60 ? "Aprobado" : "Reprobado";
  }
}

const estudiante1 = new Estudiante("Juan", 57);
const estudiante2 = new Estudiante("María", 89);

console.log(estudiante1.resultado())
console.log(estudiante2.resultado())