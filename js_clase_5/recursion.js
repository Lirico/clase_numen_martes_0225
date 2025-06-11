


// function cuentaRegresiva(n){

//     proximoN = n - 1

//     if(proximoN >= 0){
//         console.log(proximoN)
//         cuentaRegresiva(proximoN)
//     }
// }

// cuentaRegresiva(5)



// Formula: Fn = F(n–2) + F(n–1) donde n ≥ 2.
// 0, 1, 1, 2, 3, 5, 8...

// function F(n){
//     if(n < 2){
//         return n;
//     }

//     return F(n - 2) + F(n - 1)
// }
// return 0 + F(n - 2) + F(n - 1) + F(n - 2) + F(n - 1) + 1

// console.log(F(0))
// console.log(F(1))
// console.log(F(2))
// console.log(F(3))