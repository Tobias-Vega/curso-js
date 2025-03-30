const nuevaFuncion = funcionOriginal.bind(contexto);

/*
funcionOriginal: Es la función que queremos modificar.
contexto: Es el objeto que queremos que sea this dentro de funcionOriginal.
nuevaFuncion: Es la versión de funcionOriginal con this fijado.
*/

const persona = {
    nombre: "Carlos",
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

const saludarCarlos = persona.saludar.bind(persona);
saludarCarlos(); // "Hola, soy Carlos"

const persona2 = {
    nombre: "Ana",
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

const referencia = persona2.saludar;
referencia(); // "Hola, soy undefined" (o error en 'strict mode')

const referencia2 = persona.saludar.bind(persona);
referencia(); // "Hola, soy Ana"

const boton = document.querySelector("button");

const usuario = {
    nombre: "Pedro",
    mostrarNombre: function () {
    console.log(this.nombre);
}
};

boton.addEventListener("click", usuario.mostrarNombre); // undefined

boton.addEventListener("click", usuario.mostrarNombre.bind(usuario));
// "Pedro" (ahora `this` apunta a `usuario`)

function multiplicar(a, b) {
    return a * b;
}

const duplicar = multiplicar.bind(null, 2); // El primer argumento es fijo (2)
console.log(duplicar(5)); // 10