



// console.log(document)
// console.log(document.doctype)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// SELECTORES ->  A travez de funciones rastreadoras

// const secciones = document.getElementsByTagName("section")

// const pepe = document.getElementsByClassName("pepe")

// const juan = document.getElementById("juan")

// const section = document.querySelector("#juan")
// const sections = document.querySelectorAll(".pepe")

// console.log(sections)


const $cards = document.querySelector(".cards");

// Creacion de nuevos elementos
const $card = document.createElement('div'),
    $img = document.createElement('img'),
    $h2 = document.createElement('h2'),
    $p = document.createElement('p');

// Insercion de elementos
$cards.appendChild($card)
$card.appendChild($img)
$card.appendChild($h2)
$card.appendChild($p)

// Insercion de atributos
$img.src = "http://pm1.narvii.com/6378/71077675a874957c38a660206fe3ca672b1569f4_00.jpg"
$img.alt = "Yoda the Jedi"
$img.width = 150
$h2.textContent = "Yoda the Jedi"
$p.textContent = "Si cobrar en dolares tu quieres, estudiar ingles tu debes!"

// Estilizando mi card
$card.className = "card"
