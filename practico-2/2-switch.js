switch (expresión) {
    case valor1:
      // Código a ejecutar si expresión === valor1
      break;
    case valor2:
      // Código a ejecutar si expresión === valor2
      break;
    default:
      // Código si ningún caso coincide
  }

const dia = 3;

switch (dia) {
    case 1:
    console.log("Lunes");
    break;
    case 2:
    console.log("Martes");
    break;
    case 3:
    console.log("Miércoles");
    break;
    case 4:
    console.log("Jueves");
    break;
    case 5:
    console.log("Viernes");
    break;
    case 6:
    console.log("Sábado");
    break;
    case 7:
    console.log("Domingo");
    break;
    default:
    console.log("Día inválido");
}

const mes = "marzo";

switch (mes) {
  case "enero":
  case "febrero":
  case "marzo":
    console.log("Primer trimestre");
    break;
  case "abril":
  case "mayo":
  case "junio":
    console.log("Segundo trimestre");
    break;
  case "julio":
  case "agosto":
  case "septiembre":
    console.log("Tercer trimestre");
    break;
  case "octubre":
  case "noviembre":
  case "diciembre":
    console.log("Cuarto trimestre");
    break;
  default:
    console.log("Mes inválido");
}

const opcion = "2";

switch (opcion) {
  case "1":
    console.log("Ver perfil");
    break;
  case "2":
    console.log("Configurar cuenta");
    break;
  case "3":
    console.log("Cerrar sesión");
    break;
  default:
    console.log("Opción no válida");
}
