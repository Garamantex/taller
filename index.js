// Escribe una función que tome dos números como parámetros y
// devuelva su suma.

function suma(a, b) {
    return a + b;
}

console.log(suma(2, 3));

// Implementa una función que calcule el factorial de un número
// dado. Puedes usar cualquier tipo de función.

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));