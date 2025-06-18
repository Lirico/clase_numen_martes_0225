// 2015 -> EcmaScript 6
// El gran parche
/* 
    let
    const
    function flecha =>
    abreviacion de objetos literales
    operador de propagacion
    pararametro rest
    cadena templada ``
    |clases|
*/

// class Persona {
//     constructor(brazos, piernas, frase){
//         this.brazos = brazos;
//         this.piernas = piernas;
//         this.frase = frase;
//     }

//     decirFrase(){
//         return this.frase
//     }
// }

// const julian = new Persona(2, 2, "Hola amigo")

// const messi = new Persona(2, 3, "Anda pasha bobo!")

// // EXTENSION (Herencia de atributos)

// class Empleado extends Persona {
//     constructor(brazos, piernas, frase, salario, aguinaldo){
//         super(brazos, piernas, frase)
//         this.salario = salario;
//         this.aguinaldo = aguinaldo;
//     }

//     decirFrase(){
//         return this.frase
//     }
// }

// const mayco = new Empleado(2, 2, "Es todo un tema", 800000, 400000)

// class Developer extends Empleado {
//     constructor(brazos, piernas, frase, salario, aguinaldo, lvlIngles, lenguaje, modeloPC) {
//         super(brazos, piernas, frase, salario, aguinaldo)
//         this.lvlIngles = lvlIngles;
//         this.lenguaje = lenguaje;
//         this.modeloPC = modeloPC;
//     }

//     decirFrase(){
//         return this.frase
//     }
// }

// const augusto = new Developer(2,2,"Ni idea",150000, 750000, "B2", "JavaSccript", "La del gobierno")

// console.log(augusto.decirFrase())

// Ejercicio
/* 
    Implementar la clase "Cuenta" que modela una cuenta bancaria, la estructura de datos esta compuesta por 
    los siguientes componentes:
    # Número de cuenta
    # DNI del titular
    # Saldo de cuenta actual
    # Interés anual


    # Implementar las siguientes operaciones:
    # info() debe retonar una cadena con la estructura: Nro de Cuenta: nro - Titular: "dni" (saldo)
    # actualizarSaldo() Operación que actualiza el saldo de la cuenta aplicándole el interés diario 
    (interés anual dividido entre 365).
    # ingresarDinero() Operación que recibe un número e ingresa esa cantidad en la cuenta.
    # retirarDinero() Operación que recibe un número y extrae esa cantidad de la cuenta (si hay saldo disponible), 
    sino debe retonar una cadena que diga "No hay saldo disponible"
*/
class Cuenta {
    constructor(nroCuenta, dni, saldo, intereses){
        this.nroCuenta = nroCuenta;
        this.dni = dni;
        this.saldo = saldo;
        this.intereses = intereses;
    }
    info(){
        return `Cuenta nro: ${this.nroCuenta} - Titular: ${this.dni} ($${this.saldo})`
    }
    actualizarSaldo(){
        return this.saldo + (this.saldo * (this.intereses / 100 / 365))
    }
    ingresarDinero(ingreso){
        this.saldo += ingreso
    }
    retirarDinero(retiro){
        this.saldo -= retiro
    }
}

const juan = new Cuenta(3345, 34768543, 400, 3)

juan.ingresarDinero(100)

juan.retirarDinero(200)

console.log(juan.info())