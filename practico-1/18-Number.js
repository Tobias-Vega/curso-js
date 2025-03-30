console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(3.14)); // false

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(10));         // false
console.log(Number.isNaN("Hola" * 3)); // true

console.log(Number.parseInt("42"));     // 42
console.log(Number.parseInt("3.14"));   // 3
console.log(Number.parseInt("100px"));  // 100

console.log(Number.parseFloat("3.14"));   // 3.14
console.log(Number.parseFloat("10.99px"));// 10.99
console.log(Number.parseFloat("100"));    // 100

let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
console.log(num.toFixed(4)); // "3.1416"

let num2 = 123.456;
console.log(num2.toPrecision(4)); // "123.5"
console.log(num2.toPrecision(2)); // "1.2e+2"

console.log(Number("123"));       // 123
console.log(Number("3.14"));      // 3.14
console.log(Number("123abc"));    // NaN

console.log(parseInt("123abc"));  // 123
console.log(parseFloat("3.14px"));// 3.14