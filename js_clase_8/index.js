


// const $button = document.querySelector('button');



// Comodin de eventos (metodo) 
// .addEventListener(evento, function)

// $button.addEventListener('mouseout', () => alert("pancito"))

/* 
    Ejecuta cuando:
    onclick -> hacemos click
    onclose -> cerramos algo
    onmouseover -> ponemos el mouse arriba de algo
    onmouseout -> Quitamos el mouse de arriba de algo
    onscroll -> Cada vez que detecta que scrolleamos con la ruedita del raton
    onresize -> Cada vez que detecta que alteramos el ancho del viewport
    onchange -> cada vez que detecta que realizamos cambios en un input de formulario
    domcontentloaded -> cada vez que se recarga el navegador
    onload -> cada vez que carga un elemento
    onsubmit -> cada vez que le damos enviar a un formulario
*/


const $form = document.querySelector('form')
const $username = document.getElementById('username')
const $email = document.getElementById('email')
const $password = document.getElementById('password')


$username.addEventListener('change', (event) => {
    console.log(event.target.value)
})

$form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log({
        username: $username.value,
        email: $email.value,
        password: $password.value
    })
})

