const datos = [ {nombre: "Ana", edad: 22}, {nombre: "Luis", edad: 17}, {nombre: "María", edad: 19} ];

const mayores = datos.filter(el => el.edad >= 18);
const nombres = mayores.map(el => el.nombre);

console.log(nombres);