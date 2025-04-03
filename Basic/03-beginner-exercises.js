/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Este es un comentario de una línea

// 2. Escribe un comentario en varias líneas
/*
Este es un comentario
en varias líneas
*/
// 3. Declara variables con valores asociados a todos los tipos de datos primitivos
let nombre = "Juan"; // String
let edad = 30; // Number
let esEstudiante = true; // Boolean
let ciudad; // Undefined
let pais = null; // Null
let simbolo = Symbol("simbolo"); // Symbol
let bigint = BigInt(1234567890123456789012345678901234567890); // BigInt
// 4. Imprime por consola el valor de todas las variables
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.log("Ciudad:", ciudad);
console.log("País:", pais);
console.log("Símbolo:", simbolo);
console.log("BigInt:", bigint);

// 5. Imprime por consola el tipo de todas las variables
console.log("Tipo de nombre:", typeof nombre);
console.log("Tipo de edad:", typeof edad);
console.log("Tipo de esEstudiante:", typeof esEstudiante);
console.log("Tipo de ciudad:", typeof ciudad);
console.log("Tipo de país:", typeof pais);
console.log("Tipo de símbolo:", typeof simbolo);
console.log("Tipo de bigint:", typeof bigint);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Pedro"; // String
edad = 25; // Number
esEstudiante = false; // Boolean
ciudad = "Madrid"; // Undefined
pais = "España"; // Null
simbolo = Symbol("nuevoSimbolo"); // Symbol
bigint = BigInt(9876543210987654321098765432109876543210); // BigInt
// 7. Imprime por consola el valor de todas las variables
console.log("Nombre modificado:", nombre);
console.log("Edad modificada:", edad);
console.log("Es estudiante modificado:", esEstudiante);
console.log("Ciudad modificada:", ciudad);
console.log("País modificado:", pais);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 123; // String a Number
edad = "treinta"; // Number a String
esEstudiante = "sí"; // Boolean a String
ciudad = 456; // Undefined a Number
pais = true; // Null a Boolean
simbolo = 789; // Symbol a Number
bigint = "mil"; // BigInt a String

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constanteNombre = "Ana"; // String
const constanteEdad = 28; // Number
const constanteEsEstudiante = true; // Boolean
const constanteCiudad = "Barcelona"; // Undefined
const constantePais = null; // Null
const constanteSimbolo = Symbol("constanteSimbolo"); // Symbol
const constanteBigint = BigInt(1234567890123456789012345678901234567890); // BigInt

// 9. A continuación, modifica los valores de las constantes
//No se pueden modificar las constantes.

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// constanteNombre = "María"; // String
// constanteEdad = 22; // Number
// constanteEsEstudiante = false; // Boolean
// constanteCiudad = "Valencia"; // Undefined
// constantePais = "Francia"; // Null