let objetoMesa = {
    cantidadDePatas: 4,
    superficie: 2,
    precio: 50,
    descripcion: "Descripcion",
    color: "Verde",
    material: "Madera",
    altura: 12.5,
    forma: "Redonda",
}

let musico1 = {
    nombre: "Charly",
    apellido: "Garcia",
    estilo: ["Rock", "Blues", "Jazz"],
    saludar: function(fan){
        return "Hola " + fan + ", soy " + this.nombre + " " + this.apellido
    }
}

let perro = {
    nombre: "Scooby",
    edad: 7,
    ladrar: function(){
        return "Guau guau"
    }
}

console.log(objetoMesa.material)
console.log(musico1.estilo[1])
console.log(perro.ladrar())
console.log(musico1.saludar("Jonatan"));


/* FUNCION CONSTRUCTORA */
function Musico(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
    this.saludo = function(fan) {
        return "Hola " + fan + ", soy " + this.nombre + " " + this.apellido
    }
}

let nombre = "Fito";
let apellido = "Paez";

let musico2 = new Musico(nombre, apellido);
console.log(musico2)
console.log(musico2.saludo("Ezequiel"))

let musico3 = new Musico("Gustavo", "Cerati")
console.log(musico3)
console.log(musico3.saludo("Michel"))
