const persona = { nombre: "Juan", edad: 30, pais: "Argentina" };

const { nombre, edad } = persona;

console.log(nombre); // "Juan"
console.log(edad);   // 30

const usuario = { nombre: "Ana", edad: 25 };

const { nombre: userName, edad: userAge } = usuario;

console.log(userName); // "Ana"
console.log(userAge);  // 25

const producto = { nombre: "Laptop", precio: 1200 };

const { nombre2, stock = 10 } = producto;

console.log(nombre2); // "Laptop"
console.log(stock);  // 10 (valor por defecto)


function mostrarInfo({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona2 = { nombre: "Carlos", edad: 40 };
mostrarInfo(persona2);
  // "Nombre: Carlos, Edad: 40"

const empresa = {
    nombre: "TechCorp",
    ubicacion: {
        ciudad: "Buenos Aires",
        pais: "Argentina"
    }
};

const { ubicacion: { ciudad, pais } } = empresa;
console.log(ciudad); // "Buenos Aires"
console.log(pais);   // "Argentina"

const persona3 = { nombre: "Luis", edad: 35, profesion: "Ingeniero" };

const { nombre3, ...resto } = persona3;

console.log(nombre3); // "Luis"
console.log(resto);  // { edad: 35, profesion: "Ingeniero" }