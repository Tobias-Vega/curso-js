class Curso {
  constructor(nombre) {
    this.nombre = nombre;
    this.estudiantes = [];
  }

  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante)
  }

  mostrarEstudiantes() {
    this.estudiantes.forEach(el => {
      const resultado = el.nota >= 60 ? "Aprobado" : "Reprobado";
      console.log(`${el.nombre}: ${resultado}`)
    })
  }
}

const estudiante = new Curso("");

estudiante.agregarEstudiante({ nombre: "Ana", nota: 75 })
estudiante.agregarEstudiante({ nombre: "Luis", nota: 50 })
estudiante.mostrarEstudiantes()