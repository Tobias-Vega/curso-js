class Tienda {
  constructor(nombre) {
    this.nombre = nombre;
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  buscarProducto(nombre) {
    const producto = this.productos.find(producto => producto.nombre === nombre);

    return producto ? producto : "Producto no encontrado";
  }

  listarProductos() {
    return this.productos.forEach(el => {
      console.log(`Producto: ${el.nombre} - Precio: ${el.precio}`)
    })
  }
}

const tienda = new Tienda("Chango Más");

tienda.agregarProducto({nombre: "Pan", precio: 1200});
tienda.agregarProducto({ nombre: "Huevo", precio: 1500 });
console.log(tienda.buscarProducto("Pan"));
tienda.listarProductos();