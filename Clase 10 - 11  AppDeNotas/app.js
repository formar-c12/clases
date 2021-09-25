let funcionesDeTareas = require('./funcionesDeTareas')
let process = require('process')

let instruccion = process.argv[2]

switch (instruccion) {
    case "listar":
        let tareas = funcionesDeTareas.leerJSON() // contiene la base de datos de tareas
        if(tareas.length === 0){ // Si el array de tareas está vacío
            console.log("La lista de tareas está vacia")
        }else{ // Si en el array de tareas hay por lo menos una
            console.log("-----------------")
            console.log("LISTADO DE TAREAS")
            console.log("-----------------")
            for (let i = 0; i < tareas.length; i++){
                console.log(`Título: ${tareas[i].titulo} -/- Estado: ${tareas[i].estado}`)
            }
        }
        break;
    case "agregar":
        let titulo = process.argv[3]
        let estado = process.argv[4]
        funcionesDeTareas.agregarTarea(titulo, estado)
        break;
    case undefined :
        console.log("Atención - Tienes que pasar una acción.")
        break;
    default:
        console.log("No entiendo qué quieres hacer.")
    break;
}
