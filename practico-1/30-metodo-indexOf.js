const indice = array.indexOf(valorBuscado, indiceInicio);

/*
📌 valorBuscado → El elemento que deseas buscar en el array.
📌 indiceInicio (opcional) → El índice desde el cual empezar la búsqueda. Si no se especifica, la búsqueda comienza desde el índice 0.
*/

const frutas = ["manzana", "banana", "naranja", "manzana"];

const indice2 = frutas.indexOf("banana");

console.log(indice2); 
// ✅ 1 (la banana está en el índice 1)

const frutas2 = ["manzana", "banana", "naranja"];

const indice3 = frutas.indexOf("pera");

console.log(indice3); 
// ✅ -1 (la pera no se encuentra en el array)

const frutas3 = ["manzana", "banana", "naranja", "manzana"];

const indice4 = frutas3.indexOf("manzana", 1); // Empezar la búsqueda desde el índice 1

console.log(indice4); 
// ✅ 3 (el índice de la segunda "manzana" es 3)
