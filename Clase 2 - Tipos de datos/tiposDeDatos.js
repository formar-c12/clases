/* Tipos de datos */

let number = 52; // Numérico, entero
let decimal = 52.2; // Numérico, decimal
let string = "Hola, tengo 25 años"; // Cadena de caracteres
let edad = "25"; // Cadena
let edadNumber = Number(edad); // Transforma un tipo de dato string a number

console.log(edad)
console.log(edadNumber)

let esMayorDeEdad = true; // Boolean
let llueve = false; // Boolean

let persona = { // Los objetos son un tipo de dato, que a su vez guardan otros tipos de datos
    nombre : "Javier",
    edad : 25,
    vive : true,
    dni : null
};

let array = ["String", persona, { name: "Matias"}, true, 35]

let indefinido;

console.log(indefinido);

let numero = Number("1s")

console.log(numero)

let nulo = null;