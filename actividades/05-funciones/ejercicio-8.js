const procesarNumero = (num, callback) => {
  return callback(num);
}

const duplicar = num => num * 2;
const cuadrado = num => num ** 2;

console.log(procesarNumero(3, duplicar));
console.log(procesarNumero(3, cuadrado));