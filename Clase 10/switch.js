let semaforo = "verde";
/* 
if (semaforo == "verde") {
    console.log("Avance")
} else if (semaforo == "amarillo"){
    console.log("Avance con precuación")
} else if(semaforo == "rojo") {
    console.log("Stop")
} else {
    console.log("No es un color del semáforo")
} */

switch (semaforo.toLowerCase()) {
    case "verde":
        console.log("Avance")
        break;
    case "amarillo":
        console.log("Avance con precaución")
        break;
    case "rojo": 
        console.log("Stop")    
        break;
    default:
        console.log("No es un color del semáforo")
    break;
}

let numero = 25;

switch (true) {
    case numero >= 25:
        console.log("Es mayor o igual")
        break;
    case numero < 25:
        console.log("Es menor")
        break;
    default:
        break;
}
