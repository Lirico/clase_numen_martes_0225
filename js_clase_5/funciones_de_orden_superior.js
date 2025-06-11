/******* FUNCIONES DE ORDEN SUPERIOR *******/

/* 
    FUNCIONES QUE RECIBEN OTRAS FUNCIONES POR PARAMETRO
*/

// funcion que recorre un arreglo y filtra elementos
// -> condicion 

// const frutas = ["Pera", "Manzana", "Mora", "Banana"]

// function filtrar(arreglo, condicionFn){
//     const filtrados = []

//     for (const elemento of arreglo) {
//         if(condicionFn(elemento)){
//             filtrados.push(elemento)
//         }
//     }

//     console.log(filtrados)
// }


// filtrar(frutas, elemento => elemento.length > 4)
// filtrar(frutas, elemento => elemento.length === 4)
// filtrar(frutas, elemento => elemento === "Banana")
// filtrar(frutas, elemento => elemento !== "Mora")

/*************** METODOS CALLBACK ************/

const frutas = ["Pera", "Manzana", "Mora", "Banana"]

/* 
    1. filter()
    2. find()
    3. forEach()
    4. map()
    5. reduce()
    6. sort()
*/

// Filter -> Retorna naturalmente un ARREGLO con los elementos filtrados
const filtrados = frutas.filter(fruta => fruta.length === 4)

// Find -> Retorna naturalmente un elemento
const encontrado = frutas.find(fruta => fruta.length === 4)

// forEach -> Recorre un arreglo y ejecuta instrucciones. NO DEVUELVE NADA (PROCEDIMIENTO)
// const recorrido = frutas.forEach(fruta => console.log(fruta))

// map -> Recorre un arreglo y retorna un nuevo arreglo
const recorrido2 = frutas.map(fruta => fruta + " fea")

// reduce -> Recorre un arreglo, opera elemento por elemento y devuelve un unico valor como resultado operativo.
const numeros = [1,2,3,4,5,6,7]

const total = numeros.reduce((acumulador, num) => acumulador + num, 0)
const concatenados = frutas.reduce((cadena, fruta) => cadena + " " + fruta, "")


// sort -> Recorre un arreglo y ordena elementos por indice numero
const digitos = [1,20,4,3,1000,2,30]

// const ordenados1 = digitos.sort() // -> Ordena por primer caracertar/digito
// const ordenados2 = digitos.sort((a, b) => a - b) // -> Ordena de menor a mayor
// const ordenados3 = digitos.sort((a, b) => b - a) // -> Ordena de mayor a menor

function sort(arreglo, conditionFn){
    let aux1 = null;
    let aux2 = null;

    for (let i = 0; i < arreglo.length - 1; i++) {
        aux1 = arreglo[i]
        aux2 = arreglo[i + 1]
        if(conditionFn(arreglo[i], arreglo[i + 1])){
            arreglo[i] = aux2
            arreglo[i + 1] = aux1
        }
    }

    return arreglo
}

console.log(sort(digitos, (a, b) => a - b))