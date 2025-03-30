function factorial(n) {
    // Caso base
    if (n === 0) {
        return 1;
    }
    // Llamada recursiva
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

function suma(n) {
    // Caso base
    if (n === 0) {
        return 0;
    }
    // Llamada recursiva
    return n + suma(n - 1);
}

console.log(suma(5)); // 15 (5 + 4 + 3 + 2 + 1 = 15)
