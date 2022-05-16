// Operadores de comparacion
// Los valores en JS distinguen mayúsculas,
// minúsculas, acentos y diacríticos

// Operador de igualdad ==

let ciudad = 'Cáceres';
let termino = 'Cáceres';

let hayCoincidencia = ciudad == termino;
console.log(hayCoincidencia);

// Tiene una particularidad en JS y es que
// no es estricto con los tipos de datos

let valor1 = 3;
let valor2 = '3';

hayCoincidencia = valor1 == valor2;
console.log(hayCoincidencia);

// Operador de igualdad estricta ===

hayCoincidencia = valor1 === valor2;
console.log(hayCoincidencia);

// Operador de desigualdad !=
// (practica no se utiliza)

// Operador de desigualdad estricta !==
// devuelven true cuando los operandos
// no son iguales

let noHayCoincidencia = valor1 !== valor2;
console.log(noHayCoincidencia);

// Operador mayor que >

valor1 = 8.9;
valor2 = 2;

console.log(valor1 > valor2);

// Operador mayor o igual que >=

// Operador menor que <

// Operador menor o igual que <=

let mensaje1 = 'Hola';
let mensaje2 = '¿qué tal?';

console.log(mensaje1.length > mensaje2.length);