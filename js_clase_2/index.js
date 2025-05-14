/********** ESTRUCTURAS DE CONTROL DE FLUJO **********/
/* 
    Nos permite hacer preguntas a lo largo de una secuencia algoritmica, y nos permite 
    tambien realizar evaluaciones/validaciones.
*/

// Estructura secuencial

// console.log("Instruccion 1")
// console.log("Instruccion 2")
// console.log("Instruccion 3")
// console.log("Instruccion 4")
// console.log("Instruccion 5")

// Estructura condicional

// var llueve = true;

// console.log("Instruccion 1");
// console.log("Instruccion 2");

// if(llueve) {
//     console.log("Instruccion 3");
// } else {
//     console.log("Instruccion 4");
// }

// console.log("Instruccion 5");

// var numero = 10

// if (numero > 10){
//     console.log("Numero es mayor que 10")
// } else if (numero < 10){
//     console.log("Numero es menor que 10")
// } else {
//     console.log("Numero es igual a 10")
// }

// SWITCH - CASE
// Cambiar de caso en caso

// var producto = 5;

// switch(producto){
//     case 1:
//         console.log("Cafe")
//         break;
//     case 2:
//         console.log("Te")
//         break;
//     case 3:
//         console.log("Agua")
//         break;
//     case 4:
//         console.log("Energizante")
//         break;
//     default:
//         console.log("Un caramelo media hora")
// }

// BUCLES -> LOOPS

var contador = 0;

// // while -> mientras

// while(contador < 5){
//     contador++
//     console.log(contador + " while")
// }

// // do while
// do {
//     contador++
//     console.log(contador + " do while")
// } while(contador < 5)

// do {
//     contador++
//     console.log(contador + " do while 2")
// } while(contador < 5)



// for 
// for (var indice = 0; indice < 4; indice++) {
//     console.log(indice)
// }

// Julian se encuentra en un apocalipsis zombie. Una noche ingresa aun hospital abandonado.
// En este hospital no hay luz por lo tanto solo dispone de su linterna la cual tiene poca bateria.
// Decide ingresar a una de las habitaciones del hospital. Sabe que hay cierta posiblidad de que encuentre
// zombies alli. Julian esta equipado con una 9mm con N balas. Al ingresar obsera que dentro de la habitacion
// hay exactamente 10 zombies. Afortunadamente Julian tiene el cheat para realizar headshot. Pero
// no puede matar 2 zombies con la misma bala.
// En caso de que no alcancen las balas, Julian falla y muere. De lo contrario sobrevive.

// Math -> funciones matematicas -> random()
// Math.floor() -> hacia abjo
// Math.ceil() -> hacia arriba
// Math.round()

var balas = Math.floor(Math.random() * 20 )
console.log(balas)

for(var zombies = 10; zombies > 0; zombies--){
    balas = balas - 1
}

if(balas >= 0) {
    console.log("You survived, mission complete")
} else {
    console.log("You died, mission failed")
}
