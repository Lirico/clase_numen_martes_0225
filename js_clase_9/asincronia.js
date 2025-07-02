/* 
            ASINCRONIA
*/

// Douglas Crockford -> JSON

// XML -> xmlHttpRequest (objeto)

// JSON -> fetch (function)


// Por defecto, la accion del protocolo HTTP que ejecuta
// fetch es GET
fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })





