let fs = require('fs');

let moduloTareas = { //Creamos un objeto que exportamos para ser requerido en otros archivos
    archivo: './tareas.json', // Propiedad que guarda el nombre del archivo json
    leerJSON : () => { // Método que retorna el json parseado
        let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(tareasJSON)
    }, 
    escribirJSON : (info) => {
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    agregarTarea : (titulo, estado) => {
        let tareasAnteriores = moduloTareas.leerJSON() // Array original
        
        let nuevaTarea = {  // Nuevo objeto para agregar en el array original
            titulo : titulo,
            estado : estado
        }

        tareasAnteriores.push(nuevaTarea) // Agrego al final del array original el nuevo objeto

        moduloTareas.escribirJSON(tareasAnteriores)
    } 

}

module.exports = moduloTareas