/*********** PROTOTIPOS **********/

// const objeto = {}

// const arreglo = []

let cadena = new String("Hola")

let numero = new Number(32)

// CONCEPTO DE MUTABILIDAD
// Hay ciertos tipos de datos que son mutables y otros inmutables
// Un dato mutable se puede revertir, cortar, intercambiar de lugar sus elementos, etc.
// Un dato mutable no puede.
// Un arreglo es un dato mutable.
// Una cadena es un dato inmutable.

// console.log(objeto)
// console.log(arreglo)
// console.log(cadena)
// console.log(numero)

// function -> Funcion constructora
// function Auto(modelo, marca, color){
//     this.modelo = modelo
//     this.marca = marca
//     this.color = color
//     this.frenar = function() {
//         return "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
//     }
//     this.arrancar = function() {
//         return "brrrrrrrrrrrrrnnnnnnnnn"
//     }
// }

// const megane = new Auto("Megane", "Renault", "rojo")
// const laguna = new Auto("Laguna", "Renault", "azul")

// console.log(megane)
// console.log(laguna)


// function Orco(color, atk, def){
//     this.color = color
//     this.atk = atk
//     this.def = def
// }

// const orcoN1 = new Orco("rojo", 10, 5)
// const orcoN3 = new Orco("verde", 25, 15)
// const orcoN6 = new Orco("azul", 40, 20)



let nombre = "Ambito global"

// Elevacion o hoisting

const objeto = {
    nombre: "Contexto del objeto",
    imprimir: function(){
        console.log(this.nombre)
    }
}
const objeto2 = {
    nombre: "Contexto del objeto 2",
    imprimir: objeto.imprimir
}

objeto2.imprimir() 



