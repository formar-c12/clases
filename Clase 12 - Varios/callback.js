//let process = require('process')

let sumar = (n1, n2) => n1 + n2
let restar = (n1, n2) => n1 - n2
let multiplicar = (n1, n2) => n1 * n2
let dividir = (n1, n2) => n1 / n2

function calcular (n1, n2, funcionx){
    return funcionx(n1, n2)
}

/* let operacion = process.argv[2]
let numero1 = process.argv[3]
let numero2 = process.argv[4] */

console.log(calcular(5, 5, multiplicar))

let funcion = () => {
    console.log("Hola comisión 12 - SetTimeout")
}

setTimeout(funcion, 3000)

let time = 1000 * 5

setInterval(() => {
    console.log("Hola comisión 12")
}, time);