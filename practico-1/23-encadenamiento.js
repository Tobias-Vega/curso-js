const usuario = null; 
console.log(usuario.nombre); // ❌ Error: No se puede leer 'nombre' de null

const usuario2 = null; 
console.log(usuario2?.nombre); // ✅ undefined (sin error)

const persona = { nombre: "Ana", direccion: { ciudad: "Madrid" } };

console.log(persona?.nombre); // "Ana"
console.log(persona?.direccion?.ciudad); // "Madrid"
console.log(persona?.telefono?.codigo); // undefined (sin error)

const usuarios = [{ nombre: "Pedro" }, { nombre: "Maria" }];

console.log(usuarios?.[0]?.nombre); // "Pedro"
console.log(usuarios?.[5]?.nombre); // undefined (sin error)

const objeto = { metodo: () => "Hola mundo" };

console.log(objeto.metodo?.()); // "Hola mundo"
console.log(objeto.otraFuncion?.()); // undefined (sin error)

const mapa = new Map();
mapa.set("clave", "valor");

console.log(mapa.get("clave")?.toUpperCase()); // "VALOR"
console.log(mapa.get("otraClave")?.toUpperCase()); // undefined (sin error)
