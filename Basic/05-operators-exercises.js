/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 9; 
let b = 3;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacion1 = a;
asignacion1 += b; // suma y asigna

let asignacion2 = a;
asignacion2 -= b; // resta y asigna

let asignacion3 = a;
asignacion3 *= b; // multiplica y asigna

let asignacion4 = a;
asignacion4 /= b; // divide y asigna

let asignacion5 = a;
asignacion5 %= b; // módulo y asigna

console.log("Asignación += :", asignacion1);
console.log("Asignación -= :", asignacion2);
console.log("Asignación *= :", asignacion3);
console.log("Asignación /= :", asignacion4);
console.log("Asignación %= :", asignacion5);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a > b); // True
console.log(a >= 9); // True
console.log(b <= 3); // True
console.log(a !== b); // True
console.log(b == 3); // True


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a < b); // False
console.log(a <= 8); // False
console.log(b >= 4); // False
console.log(a === b); // False
console.log(b != 3); // False

// 5. Utiliza el operador lógico and

console.log(a > 5 && b < 5); // False
console.log(a >= 9 && b <= 3); // True

// 6. Utiliza el operador lógico or

console.log(a > 5 || b < 5); // True
console.log(a >= 9 || b <= 3); // True

// 7. Combina ambos operadores lógicos
console.log(a > 5 && b < 5 || a >= 9); // True

// 8. Añade alguna negación

console.log(!(a > 5)); // False
console.log(!(a < 5)); // True
console.log(!(a >= 9)); // False

// 9. Utiliza el operador ternario

let resultado = (a > b) ? "a es mayor que b" : "b es mayor que a";
console.log(resultado); // "a es mayor que b"


// 10. Combina operadores aritméticos, de comparáción y lógicas
let resultadoFinal = (a + b > 10 && a - b < 5) ? "Resultado verdadero" : "Resultado falso";
console.log(resultadoFinal); // "Resultado verdadero