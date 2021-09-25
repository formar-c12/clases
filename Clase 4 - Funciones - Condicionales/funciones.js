function sumar (numero1, numero2) {
    return numero1 + numero2
}

console.log(sumar("10", "15")) // retorna la suma de los dos números

// Funciones declaradas

function saludar (nombre) {
    return "Hola, " + nombre
}

let nombreDeUsuario = "Elian";

console.log(saludar(nombreDeUsuario))

// Funciones expresadas
let hacerSushi = function(cantidad) {
    return "Sushi\n".repeat(cantidad)
}

//console.log(hacerSushi(5))

function saludar2 (nombre = "Cosme", apellido = "Fulanito") {
    return "Hola " + nombre + " " + apellido;
}

let nombre1 = "Jonatan";

console.log(saludar2( nombre1, "Cespedes"))

let restar = function (num1, num2) {
    let resultado = num1 - num2;
    return resultado
}