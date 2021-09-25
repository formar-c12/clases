let frutas = [ "Banana", "Frutilla", "Pera" ];
console.log("Array original ->" + frutas)

// PUSH 
frutas.push("Manzana")
console.log("PUSH ->" + frutas)

//POP 
frutas.pop()
console.log("POP ->" + frutas)

//SHIFT
frutas.shift()
console.log("SHIFT ->" + frutas)

//UNSHIFT
frutas.unshift("Kiwi", "Uva", "Naranja")
console.log("UNSHIFT ->" + frutas)

//JOIN
console.log(frutas)
let separadosPorComa = frutas.join()
console.log(separadosPorComa)
let separadosPorGuion = frutas.join(" - ")
console.log(separadosPorGuion)

//INDEXOF (Busca en el array el elemento que recibe por parámetro)
//SI lo encuentra devuelve el índice del elemento en el array
// si NO lo encuentra devuelve -1
console.log(frutas.indexOf("Uva")) //1
console.log(frutas.indexOf("Manzana")) //-1
console.log(frutas.indexOf("Frutilla")) //3
console.log(frutas.indexOf("frutilla")) //-1

let fruta = "Manzana"

if(frutas.indexOf(fruta) != -1){
    console.log("Encontré la fruta que buscabas en la posición " + frutas.indexOf(fruta))
} else {
    console.log("No encontré la fruta que buscabas")
}

//LASTINDEXOF 
frutas.push("Naranja")
console.log(frutas)
console.log(frutas.lastIndexOf("Naranja"))
console.log(frutas.lastIndexOf("Uva"))

//INCLUDES 
console.log(frutas.includes("Pera")) // true
console.log(frutas.includes("Ananá")) // false
console.log(frutas.includes("pera")) // false


