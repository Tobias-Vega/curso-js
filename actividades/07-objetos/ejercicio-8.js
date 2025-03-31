const infoPersonal = {
  nombre: "Luis",
  edad: 23,
}

const infoContacto = {
  email: "luisperez@gmail.com",
  telefono: "3704-453465",
}

const usuario = {...infoPersonal, ...infoContacto}

console.log(usuario);