let sumar = require('./sumar')
let restar = require('./restar')
let multiplicar = require('./multiplicar')
let dividir = require('./dividir')
let process = require('process')

let operacion = process.argv[2].toLowerCase() //sumar
let numero1 = Number(process.argv[3]) // 2
let numero2 = Number(process.argv[4]) // 5

if(operacion === "sumar"){
    console.log("----")
    console.log("SUMA")
    console.log("----")
    console.log(sumar(numero1, numero2))
}

if(operacion === "restar") {
    console.log("-----")
    console.log("RESTA")
    console.log("-----")
    console.log(restar(numero1, numero2))
}

if(operacion === "dividir"){
    console.log("--------")
    console.log("DIVISIÓN")
    console.log("--------")
    console.log(dividir(numero1, numero2))
}

if (operacion === "multiplicar") {
    console.log("-----------")
    console.log("MULTIPLICAR")
    console.log("-----------")
    console.log(multiplicar(numero1, numero2))
}






