const calculadora = {
  a: 3,
  b: 5,
  sumar() {
    return this.a + this.b;
  },
}

console.log(calculadora.sumar())