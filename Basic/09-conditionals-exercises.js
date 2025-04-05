/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Juan";
if (name === "Juan") {
    console.log(name); // "Juan"
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin"
let password = "1234"
if (usuario === "admin" && password === "1234") {
    console.log("Bienvenido"); // "Bienvenido"
}
else {   
    console.log("Identificate de nuevo"); // "Identificate de nuevo"
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -5
if (number > 0) {
    console.log("El número es positivo"); // "El número es positivo"
}
else if (number < 0) {
    console.log("El número es negativo"); // "El número es negativo"
}
else {
    console.log("El número es cero"); // "El número es cero"
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16
if (age >= 18) {
    console.log("Puede votar"); // "Puede votar"
}
else {
    let yearsLeft = 18 - age
    console.log(`No puede votar, le faltan ${yearsLeft} años`); // "No puede votar, le faltan 2 años"
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age2 = 20
let category = age2 >= 18 ? "adulto" : "menor"
console.log(category); // "adulto"


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 3
if (month >= 3 && month <= 5) {
    console.log("Primavera"); // "Primavera"
}
else if (month >= 6 && month <= 8) {
    console.log("Verano"); // "Verano"
}
else if (month >= 9 && month <= 11) {
    console.log("Otoño"); // "Otoño"
}
else {
    console.log("Invierno"); // "Invierno"
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let daysInMonth
if (month === 2) {
    daysInMonth = 28 // o 29 en años bisiestos
}
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysInMonth = 30
}
else {
    daysInMonth = 31
}
console.log(`El mes ${month} tiene ${daysInMonth} días`); // "El mes 3 tiene 31 días"


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "es"

switch (language) {
    case "es":
        console.log("Hola"); // "Hola"
        break
    case "en":
        console.log("Hello"); // "Hello"
        break
    case "fr":
        console.log("Bonjour"); // "Bonjour"
        break
    default:
        console.log("Idioma no reconocido"); // "Idioma no reconocido"
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month2 = 3
switch (month2) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera"); // "Primavera"
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano"); // "Verano"
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño"); // "Otoño"
        break
    default:
        console.log("Invierno"); // "Invierno"
}   

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let month3 = 3
let daysInMonth2
switch (month3) {
    case 2:
        daysInMonth2 = 28 // o 29 en años bisiestos
        break
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth2 = 30
        break
    default:
        daysInMonth2 = 31
}
console.log(`El mes ${month3} tiene ${daysInMonth2} días`); // "El mes 3 tiene 31 días"