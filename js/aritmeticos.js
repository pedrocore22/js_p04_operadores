// Operadores en JavaScript

// Son una serie de símbolos utilizados en las
// instrucciones para llevar a cabo expresiones

// Sintaxis
// (unarios) operando operador
// (binarios) operando1 operador operando2
// (ternario) veremos sintaxis más adelante

// Operadores aritmeticos

// + y -

let resultado = 8;
let factorCorreccion = 2;

let puntuacion = resultado - factorCorreccion;
console.log(puntuacion);

// En el caso de la suma (+) si los tipos de datos
// empleados en los operandos son string en vez de
// sumar lo que hace es concatenar

let mensaje = 'Hola ';
let nombre = 'Lola';

let mensajeCompleto = mensaje + nombre;
console.log(mensajeCompleto);

// * y /

let valor1 = 10;
let valor2 = 2;

puntuacion = valor1 * valor2;
console.log(puntuacion);

// Cuando el interpréte recibe una operación aritmética que
// por sus tipos de datos no se puede ejecutar devuelve
// como resulta NaN (not a number)

let valor3 = '¿Como estas?';

puntuacion = valor1 / valor3;
console.log(puntuacion);

// Resto %

let ejemploResto = 13 % 2;
console.log(ejemploResto);

// Incremento ++ (suma una unidad al valor de la variable)

let valor4 = 0;
console.log(++valor4); // Preincremento

let valor5 = 10;
console.log(valor5++); // Postincremento
console.log(valor5);

// Decremento -- (resta una unidad al valor de la variable)

// idem anterior pero restando

// PRECEDENCIA DE OPERADORES
// Tabla de precedencia (predencia operados js en google)

resultado = 12 + 3 * 8;
console.log(resultado);

// Podemos romper la precedencia con paréntesis

resultado = (12 + 3) * 8;
console.log(resultado);
