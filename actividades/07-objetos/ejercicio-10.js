const productos = [
  {
    nombre: "Leche",
    precio: 3.99,
    disponible: true
  },
  {
    nombre: "Café",
    precio: 6.99,
    disponible: false
  },
  {
    nombre: "Pan",
    precio: 2.99,
    disponible: true
  },
]

const disponibles = productos.filter(el => el.disponible).map(el => el.nombre);

console.log(disponibles)