/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("Números del 1 al 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console .log("Suma de los números del 1 al 100:");
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`La suma es: ${suma}`);

// 3. Crea un bucle que imprima los números pares del 1 al 50
console.log("Números pares del 1 al 50:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("Imprimiendo los nombres:");
const nombres = ["Juan", "María", "Pedro", "Ana", "Luis"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("contando vocales: de la cadena");
let cadena = "Hola, ¿cómo estás?";
let contadorVocales = 0;
for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i].toLowerCase();
    if ("aeiou".includes(letra)) {
        contadorVocales++;
    }
}
console.log(`Número de vocales: ${contadorVocales}`);
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);

}
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numeros = [1, 2, 3, 4, 5];
console.log("Multiplicando los números: " + numeros);
let producto = 1;
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
}
console.log(`Producto de los números: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("Tabla de multiplicar del 5:");
const numero = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
// 8. Usa un bucle para invertir una cadena de texto
console.log("Invierte una cadena de texto:");
const texto = "Hola Mundo";
let textoInvertido = "";
for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}
console.log(`Texto invertido: ${textoInvertido}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
const fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(`Primeros 10 números de Fibonacci: ${fibonacci.join(", ")}`);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const numerosArray = [5, 12, 8, 20, 3, 15];
const mayoresA10 = [];
for (let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] > 10) {
        mayoresA10.push(numerosArray[i]);
    }
}
console.log(`Números mayores a 10: ${mayoresA10.join(", ")}`);