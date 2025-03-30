function evaluarNumero(num) {
  if (num > 0) {
    return "Positivo";
  } else if (num < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
}

console.log(evaluarNumero(4))