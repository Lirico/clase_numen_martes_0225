

/******** FUNCIONES ********/

// Una funcion es un bloque ejecutable que funciona
// como subprograma.

// Nos permiten esconder codigo hasta ser necesario
// Reutilizar multiples veces un mismo codigo sin 
// que volver a declararlo.

// Declaracion de funcion (una bomba a detonar)
// function sumar(a, b){
//     return a + b
// }

// Invocacion o llamado de funcion (detonador de la bomba=
// sumar(4, 4)

// Funcion -> Un bloque ejecutable que devuelve un valor

// Procedimiento -> Un bloque ejecutable que no devuelve nada


// a^2 + b^2 = c^2
// function teoremaDePitagoras(catetoA, catetoB){
//     return (catetoA ** 2 + catetoB ** 2) ** 1/2
// }


// SCOPE -> Alcance / Ambito 

// ES6 -> 2015 -> EL GRAN PARCHE
// let -> permitir
// const -> constante


// const musica = "Pop" // Ambito global


// {
//     const musica = "Rock" // Ambito local
// }

// musica = "Jazz"
// console.log(musica)


/////////////////////////////////////////////////////
// 1- Importacion de modulos
// 2- Declaracions de variables globales
// 3- Declaracion de funciones
// 4- Invocacion o llamado de funciones


// // Funciones declaradas
// function sumar(a, b){
//     return a + b
// }


// // Funciones expresadas (2015)
// const restar = function(a, b){
//     return a - b 
// }

// // Funciones flecha (2015)
// const dividir = (a,b,c) => {
//     resultado = a / b

//     return resultado / c
// }

// console.log(dividir(6, 3, 2))




/* 
    La academia de Howartz necesita un reemplazo para el Sobrero Seleccionador ya que este esta enfermo.
    Necesitamos programar una funcion que califique a los magos por sus aptitudes y los envie a la casa 
    correspondiente.
    Para simular cada caso de alumno utilizaremos un sistema de generacion de datos aleatorios. 
*/

// const valienteYAtrevido = 1,
//     justicieroYAmable = 2,
//     argumentativoYAnalitico = 3,
//     astutoEInescrupuloso = 4;

// const numeroAleatorio = Math.ceil(Math.random() * 5)

// const sombreroSeleccionador = (test) => {
//     switch (test) {
//         case valienteYAtrevido:
//             return "Griffindor";
//         case justicieroYAmable:
//             return "Hufflepuff";
//         case argumentativoYAnalitico:
//             return "Ravenclaw";
//         case astutoEInescrupuloso:
//             return "Slytherin";
//         default:
//             return "Azkaban"
//     }
// }

// console.log(sombreroSeleccionador(numeroAleatorio))
