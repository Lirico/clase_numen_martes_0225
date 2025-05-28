/****** ARREGLOS ******/

/* 
    Los arreglos son listas de elementos. Los elementos
    dentro de un arreglo estan ordenados bajo un indice
    numerico.
    Los arreglos pueden arrancar vacios e irse llenando
    conforme agregamos mas elementos.
*/

const estudiantes = ["Pedro", "Juan", "Augusto", "Julian", "Mayco", "Mauro"]

// let posicion = 0

// while(posicion < estudiantes.length){
//     if(posicion % 2 === 0){
//         console.log(estudiantes[posicion] + " feo")
//     } else {
//         console.log(estudiantes[posicion])
//     }
//     posicion++
// }

/********* METODOS PARA PONER Y QUITAR ESTUDIANTES ******/
/* 
    arreglo.push() -> Agrega un elemento al final del arreglo
    arreglo.pop() -> Devuelve el ultimo elemento del arreglo
    arreglo.unshift() -> Agrega un elemento al comienzo del arreglo
    arreglo.shift() -> Devuelve el primer elemento del arreglo
*/

// console.log(estudiantes)
// estudiantes.push("Patricia")
// console.log(estudiantes)
// estudiantes.push("Roberto")
// console.log(estudiantes)
// estudiantes.push("Claudio")
// console.log(estudiantes)
// estudiantes.unshift("Olga")
// console.log(estudiantes)
// estudiantes.pop()
// console.log(estudiantes)
// estudiantes.shift()
// console.log(estudiantes)

/****** Como quitar un elemento del medio arreglo ******/


// function eliminar(arreglo, elemento){

//     let aux1;
//     let aux2;

//     for (let posicion = 0; posicion < arreglo.length - 1; posicion++) {
//         if(arreglo[posicion] === elemento){
//             aux1 = arreglo[posicion]
//             aux2 = arreglo[posicion + 1]
//             arreglo[posicion] = aux2
//             arreglo[posicion + 1] = aux1
//         }
//     }
//     estudiantes.pop()
// }


// eliminar(estudiantes, "Augusto")
// eliminar(estudiantes, "Juan")
// eliminar(estudiantes, "Julian")

// console.log(estudiantes)