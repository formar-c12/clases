let clubesUno = [ "Sacachispas", "All Boys", "Atlas" ];
let clubesDos = [ "Yapanqui", "Mandiyu", "Nueva Chicago" ];

let todosLosClubes = [...clubesUno, ...clubesDos]

console.log(todosLosClubes)

let dia1 = [12, 15, 85, 150]
let dia2 = [12, 115, 835, 180]
let dia3 = [12, 11235, 8512, 112350]

let caja = [...dia1, ...dia2, ...dia3]

let total = caja.reduce((acum, num ) => acum + num)

console.log(total)


//rest parameter

function totalSuma (...numeros) {
   return numeros.reduce((acum, num) => acum + num)
}

console.log(totalSuma(2, 2, 5, 105896, 35146854 ,351635 ,351 ,3))