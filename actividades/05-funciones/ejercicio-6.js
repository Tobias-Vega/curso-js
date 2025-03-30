let limite = 10;
let tabla = 0;

const imprimirTabla = (n) => {
  for (let i = 1; i <= limite; i++) {
    tabla = i * n;
    console.log(tabla);
  }
}

imprimirTabla(5);