for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

let frutas = ["manzana", "banana", "naranja"];
for (const fruta of frutas) {
    console.log(fruta)
}

let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" }
for (let clave in persona) {
    console.log(clave + ": " + persona[clave])
}