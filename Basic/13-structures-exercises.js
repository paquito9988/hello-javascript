
// 1. Crea un array que almacene cinco animales
let Animales = ["Perro", "Gato", "Elefante", "León", "Tigre"]

// 2. Añade dos más. Uno al principio y otro al final
Animales.unshift("Lobo")
Animales.push("Serpiente")
console.log(Animales)

// 3. Elimina el que se encuentra en tercera posición
Animales.splice(2, 1)
console.log(Animales)

// 4. Crea un set que almacene cinco libros
let Libros = new Set(["El Quijote", "Cien años de soledad", "1984", "El Principito", "Crimen y castigo"])
console.log(Libros)


// 5. Añade dos más. Uno de ellos repetido
Libros.add("El Quijote") //no se añade porque ya existe
Libros.add("El Hobbit")
console.log(Libros)

// 6. Elimina uno concreto a tu elección
Libros.delete("1984")
console.log(Libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let Meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (Meses.has(5)) {
    console.log(Meses.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
Meses.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(Meses.get("Verano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const AnimalesArray = ["Perro", "Gato", "Elefante", "León", "Tigre"]
const AnimalSet = new Set(AnimalesArray)
const AnimalesMap = new Map()

AnimalesMap.set("Animales", AnimalSet)
console.log(AnimalesMap.get("Animales"))

