const texto = "La casa es grande y la casa es bonita";
const coincidencias = texto.match(/casa/g);

console.log(coincidencias); // ["casa", "casa"]

const texto2 = "Mi correo es ejemplo@dominio.com y otro@dominio.net";
const correos = texto2.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g);

console.log(correos); // ["ejemplo@dominio.com", "otro@dominio.net"]

const texto3 = "Hola mundo";
const resultado = texto3.match(/javascript/);

console.log(resultado); // null

const texto4 = "El número de teléfono es 123-456-7890";
const resultado2 = texto4.match(/(\d{3})-(\d{3})-(\d{4})/);

console.log(resultado2);
// ["123-456-7890", "123", "456", "7890"]
