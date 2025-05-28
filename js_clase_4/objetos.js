/********* OBJETOS *********/

/* 
    Son una estructura de datos que nos permiten representar elementos de la vida
    real o de la fantasia, definiendo sus propiedades y sus acciones.
*/

// const auto = {
//   // Propiedades
//   modelo: "Megane",
//   marca: "Renault",
//   color: "Invisible",
//   pasajeros: ["Julian", "Augusto", "tuvieja"],
//   cantRuedas: 4,

//   // Acciones -> Metodos
//   frenar: function(a, b) {
//     return a + b + "iiiiiiii"
//   }
// };

// console.log(auto)
// console.log(auto.pasajeros)
// console.log(auto.pasajeros[2])


const productos = [
    {id: 1, name: "Xayah", price: "10"},
    {id: 2, name: "Garen", price: "20"},
    {id: 3, name: "Twitch", price: "30"},
    {id: 4, name: "Yasuo", price: "40"},
    {id: 5, name: "Nasus", price: "50"}
]

function crearTarjetas(arreglo) {
    for (const posicion of arreglo) {
        // Backticks
        // console.log(`
        //      ${posicion.name}
        //       ${posicion.price}
        //      - 0 +
        //     AGREGAR
        // `)
    }
}


crearTarjetas(productos)