let persona = {
  nombre: "Tobías",
  edad: 19,
  profesion: "Estudiante",
}

persona.edad = 20;
persona.pais = "Argentina";

for (const key in persona) {
  console.log(key)
}