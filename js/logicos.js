// Operadores lógicos

// Operador lógico AND &&

let valor1 = 12;
let valor2 = 13;
let valor3 = 12;

let esCorrecto = valor2 < valor1 && valor1 === valor3;
console.log(esCorrecto); // false porque la primera expresión no se cumple

// Operador lógico OR ||

esCorrecto = valor2 < valor1 || valor1 === valor3;
console.log(esCorrecto); // true porque la segunda expresión se cumple

// Operador lógico NOT ! (negación unaria)
// Su uso fundamental es para invertir el valor de
// una variable booleana

let isMayorEdad = false;

isMayorEdad = !isMayorEdad; // Asignar true a la variable
console.log(isMayorEdad);

// Operador condicional (ternario) 
// Sustituye a una estructura if-else cuando
// solo tenemos una línea

// expresiónCondicional ? valor1 : valor2;

let estadoParticipante;
let edadParticipante = 12;

estadoParticipante = edadParticipante >= 18 ? 'Adulto' : 'Menor';
console.log('El participante es ' + estadoParticipante);
