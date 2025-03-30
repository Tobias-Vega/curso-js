regex.test(cadena);

/*
regex: Es la expresión regular (un objeto RegExp).
cadena: La cadena de texto que quieres probar contra la expresión regular.
*/

const regex = /JavaScript/;

const texto1 = "Estoy aprendiendo JavaScript";
const texto2 = "Estoy aprendiendo React";

console.log(regex.test(texto1)); // true
console.log(regex.test(texto2)); // false

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const email1 = "usuario@dominio.com";
const email2 = "usuario@dominio";

console.log(regexEmail.test(email1)); // true
console.log(regexEmail.test(email2)); // false

const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const password1 = "Contraseña1@";
const password2 = "contraseña1@";

console.log(regexPassword.test(password1)); // true
console.log(regexPassword.test(password2)); // false
