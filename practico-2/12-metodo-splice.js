array.splice(indice, cantidad_a_eliminar, item1, item2,);

/*
🔹 indice: La posición donde comenzará a realizarse la modificación (índice basado en 0).
🔹 cantidad_a_eliminar: El número de elementos a eliminar a partir de la posición indicada. Si no se elimina ninguno, se puede omitir o poner 0.
🔹 item1, item2, ...: Elementos que se agregarán en la posición indicada. Se agregan a partir del índice especificado.
*/

const frutas = ["manzana", "banana", "naranja", "fresa"];
frutas.splice(2, 1);

console.log(frutas); // ["manzana", "banana", "fresa"]

const frutas2 = ["manzana", "banana", "naranja", "fresa", "uva"];
frutas2.splice(1, 3);

console.log(frutas2); // ["manzana", "uva"]

const frutas3 = ["manzana", "banana", "naranja"];
frutas3.splice(1, 0, "kiwi", "fresa");

console.log(frutas3); // ["manzana", "kiwi", "fresa", "banana", "naranja"]

const frutas4 = ["manzana", "banana", "naranja"];
frutas4.splice(1, 1, "kiwi");

console.log(frutas4); // ["manzana", "kiwi", "naranja"]
