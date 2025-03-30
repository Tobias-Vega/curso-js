let usuario = "Admin";
let password = "123456";
let confirmPassword = "123456";

if (!usuario) {
  console.log("Nombre de usuario requerido");
} else if (password.length < 6) {
  console.log("La contraseña debe de ser mínimo 6 caracteres");
} else if (password !== password) {
  console.log("Las contraseñas no son iguales");
} else {
  console.log("Registro exitoso")
}