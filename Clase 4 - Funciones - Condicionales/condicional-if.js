/* Condicionales */

let color = "aMarillo".toLowerCase();

/* if(color != "Rojo") {
    console.log("Avance")
} */

/* if(color != "Rojo") {
  console.log("Avance")
} else {
    console.log("Stop")
} */

// Verde -> Avance *
// Amarillo -> Avance con precaución * 
// Rojo -> Stop *
// -> Ese no es un color del semáforo *

if(color.toLowerCase() === "verde") {
    console.log("Avance")
} else if (color.toLowerCase() === "amarillo"){
    console.log("Avance con precaución")
} else if ( color.toLowerCase() === "rojo") {
    console.log("Stop")
} else {
    console.log("Ese no es un color del semáforo")
}



