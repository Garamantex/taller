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

// Crea una función que ordene un array de números de manera
// ascendente. Puedes utilizar funciones flecha.

let ordenarArray = (array) => array.sort((a, b) => a - b);

console.log(ordenarArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));

// Desarrolla una función que cuente la cantidad de palabras en
// una cadena dada. Puedes usar funciones anónimas.

let cuentaPalabras = function(cadena) {
    return cadena.split(' ').length;
}

console.log(cuentaPalabras("Hola, ¿cómo estás?"));

// Escribe una función para calcular el área de un círculo. Puedes
// utilizar funciones declarativas.

function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

console.log(calcularAreaCirculo(5));

// Crea una función que filtre los números pares de un array. Puedes utilizar
// funciones de expresión.

let filtraPares = function(array) {
    return array.filter(numero => numero % 2 === 0);
}

console.log(filtraPares([1, 2, 3, 4, 5, 6]));

// Implementa una función que verifique si una palabra es un palíndromo (se
// lee igual de izquierda a derecha que de derecha a izquierda).

function esPalindromo(palabra) {
    let palabraReversa = palabra.split('').reverse().join('');
    return palabra === palabraReversa;
}

console.log(esPalindromo("reconocer"));