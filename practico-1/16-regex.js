const regex = /hola/;

const regex2 = RegExp("hola");

const regex3 = /JavaScript/;
console.log(regex3.test("Me encanta JavaScript")); // true
console.log(regex3.test("Me encanta Python"));     // false

const texto = "Hola, mi número es 123-456-7890";
const regex4 = /\d{3}-\d{3}-\d{4}/;
console.log(texto.match(regex4)); // ["123-456-7890"]

const texto2 = "Aprender JavaScript es genial";
console.log(texto2.replace(/JavaScript/, "Python")); // "Aprender Python es genial"

const texto3 = "Mi correo es email@example.com";
const regex5 = /\w+@\w+\.\w+/;
console.log(texto.search(regex5)); // 13 (posición en la cadena)

const texto4 = "manzana,pera,uva,mango";
console.log(texto4.split(/,/)); // ["manzana", "pera", "uva", "mango"]