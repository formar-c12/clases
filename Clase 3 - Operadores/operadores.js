/* Operadores */

// De asignación

var operador = "valor" // el símbolo igual (=) es el operador de asignación

// Aritméticos

//Suma
console.log( 25 + 2 );
console.log( "25" + "2" );
console.log( "Hola" + " " + "¿Cómo estás?" );

//Resta
console.log( 25 - 2);

// Multiplicación
console.log( 25 * 2);

// División 
console.log( 25 / 2 );

// Incremento 
let numero = 25;
++numero // Incrementa en 1 el valor asignado ->numero = 26
++numero
// Decremento
console.log(--numero) // Decrementa en 1 el valor asignado ->numero = 25

//Módulo. El resto obtenido de la división entre los numeros
console.log(15%3)
console.log(13%2)

// Operadores de comparación simple

//igualdad
console.log( 10 == "10" ) // compara los valores y NO los tipos de datos

//desigualdad
console.log( 10 != "10" )

// Operadores de comparación estricta

console.log( 10 === "10" ) 

console.log( 10 !== "10" ) // 10 (number) Es distinto de 10 (string) 

/* Operadores relacionales */

console.log("Mayor que..." + (15 > 10) ) // Mayor que...

let menorQue = 15 >= 10;
console.log( "Menor que : " + menorQue ) // Mayor o igual que...
console.log( 15 < 10 ) // Menor que...
console.log( 15 <= 10 ) // Menor o igual...

/* Operadores lógicos */

// && (AND) Todos sus valores deben evaluar como TRUE (verdadero)
console.log((10 > 15) && (10 != 20))// --> False
//        false   and true
console.log((10 < 15) && (10 != 20))
//            true    and  true          -> True

// || (OR) Solo un valor debe evaluar como true para que la expresión retorne true

console.log((10 > 15) || (10 != 20))
//             false  or    true
console.log((10 > 15) || (10 == 20) || (15 === "15"))
//            false   or    false        false

// ! (NOT) - Niega la condición, TRUE pasa a false, False pasa true

let color = "Verde";
let noEsRojo = (color == "Rojo")

console.log(noEsRojo)

var x = "Equis"
console.log(x)

x = { numero: 80}

console.log(x)