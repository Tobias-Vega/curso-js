
function Libro(titulo, autor, anio) {
  this.titulo = titulo;
  this.autor = autor;
  this.anio = anio;
  this.descripcion = () => {
    return `El título del libro es ${titulo}, su autor es ${autor} y se publicó en el año ${anio}`
  }
}

const libro = new Libro("Harry Poter", "J.K Rowling", 1997)

console.log(libro.descripcion());