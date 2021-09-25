let sumar = require('./sumar')
let restar = require('./restar')
let multiplicar = require('./multiplicar')
let dividir = require('./dividir')



console.log("DIVISIÓN")
console.log("________")
console.log(dividir(10, 0))
console.log(dividir(10, 5))

console.log("SUMA")
console.log("________")
console.log(sumar(5, "Hola"))
console.log(sumar(5))

console.log("RESTA")
console.log("________")
console.log(restar(10, 5))

console.log("MULTIPLICAR")
console.log("________")
console.log(multiplicar(10, 5))
console.log(multiplicar(0, 5))