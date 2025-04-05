/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let str1 = "Hola";
let str2 = "Mundo";
let concatenated = str1 + " " + str2;
console.log(concatenated); // "Hola Mundo"

// 2. Muestra la longitud de una cadena de texto
let str = "Hola Mundo";
let length = str.length;
console.log(length); // 10

// 3. Muestra el primer y último carácter de un string
length = str.length;
let firstChar = str.charAt(0);
let lastChar = str.charAt(length - 1);
console.log(firstChar); // "H"
console.log(lastChar); // "o"   

// 4. Convierte a mayúsculas y minúsculas un string
let upperCase = str.toUpperCase();
let lowerCase = str.toLowerCase();
console.log(upperCase); // "HOLA MUNDO"
console.log(lowerCase); // "hola mundo"

// 5. Crea una cadena de texto en varias líneas
let multilineStr = `Hola
Mundo`;
console.log(multilineStr); // "Hola\nMundo"

// 6. Interpola el valor de una variable en un string
let name = "Juan";
let greeting = `Hola, ${name}`;
console.log(greeting); // "Hola, Juan"


// 7. Reemplaza todos los espacios en blanco de un string por guiones
let strWithSpaces = "Hola Mundo";
let replacedStr = strWithSpaces.replace(/ /g, "-");
console.log(replacedStr); // "Hola-Mundo"

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let word = "Mundo";
let containsWord = strWithSpaces.includes(word);
console.log(containsWord); // true

// 9. Comprueba si dos strings son iguales
let str3 = "Hola Mundo";
let str4 = "Hola Mundo";
let areEqual = str3 === str4;
console.log(areEqual); // true

// 10. Comprueba si dos strings tienen la misma longitud
let str5 = "Hola";
let str6 = "Hola Mundo";
let sameLength = str5.length === str6.length;
console.log(sameLength); // false


