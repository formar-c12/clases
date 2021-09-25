let alumnxs = [
    {
        nombre: "Matias",
        materiasAprobadas: [
            "Matematicas",
            "Lengua",
            "Naturales"  
        ] 
    },
    {
        nombre: "Federico",
        materiasAprobadas: [
            "Matematicas",
            "Lengua",
            "Naturales",
            "Observacion de playground"  
        ] 
    },
    {
        nombre: "Julia",
        materiasAprobadas: [
            "Matematicas",
            "Lengua",
            "Observacion de playground"  
        ] 
    }
]
/* 
for(let i = 0; i < alumnxs.length ; i++){
    console.log("----------------")
    console.log(alumnxs[i].nombre)
    console.log("----------------")
    for(let index = 0; index < alumnxs[i].materiasAprobadas.length ;index++){
        console.log(alumnxs[i].materiasAprobadas[index])
    }
}  */


// Metodos de array

/* let probandoMap = alumnxs.map(function (element) {
    element.nombre = "Elian"
       return element
})
 */


//console.log(probandoMap)

// forEach
for(let i = 0; i < alumnxs.length ; i++) {
    console.log(alumnxs[i].nombre)
}

let nombres = []

alumnxs.forEach((element, index) => console.log(`${index + 1} - ${element.nombre}`))

console.log(nombres)

// .filter()

let materias = [
    {
        nombre : "Matemáticas",
        aprobado : true
    },
    {
        nombre : "Literatura",
        aprobado : true
    },
    {
        nombre : "Inglés",
        aprobado : false
    },
    {
        nombre : "Física",
        aprobado : false
    },
    {
        nombre : "Biología",
        aprobado : true
    },
]

let materiasAprobadas = materias.filter(materia => {
  return materia.aprobado === true
})

console.log(materiasAprobadas)

// reduce

let valores = [100, 150, 200, 500, 1000]

let sumaDeValores = valores.reduce((acumulador, numero) => {
    return acumulador + numero
})

// 0 + 100 = 100
// 100 + 150 = 250
// 250 + 200 = 450

console.log(sumaDeValores)
// find - sort

