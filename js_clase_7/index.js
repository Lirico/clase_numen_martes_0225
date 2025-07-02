



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

const pokemons = [
    {
        img: "https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif?resize=480%2C342&ssl=1",
        name: "Pikachu",
        type: "Electric",
        bgColor: "yellow"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/it/archive/4/43/20120529174523%21Bulbasaur.png",
        name: "Bulbasaur",
        type: "Plant/Venom",
        bgColor: "green"
    },
    {
        img: "https://freepngimg.com/thumb/pokemon/117717-charmander-png-image-high-quality-thumb.png",
        name: "Charmander",
        type: "Fire",
        bgColor: "orange"
    },
    {
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8355c42b-bec4-426e-a0fa-f39523ea6c02/da74aa6-367253cd-ef9e-41fe-83df-64b857675335.png/v1/fill/w_848,h_720/vamo_a_calmarno_render_by_taringamemes_da74aa6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODM1NWM0MmItYmVjNC00MjZlLWEwZmEtZjM5NTIzZWE2YzAyXC9kYTc0YWE2LTM2NzI1M2NkLWVmOWUtNDFmZS04M2RmLTY0Yjg1NzY3NTMzNS5wbmciLCJ3aWR0aCI6Ijw9ODQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZNF3N5MBYnZKSWpRRuWvSYFLbTvxacfR439C1L60lDk",
        name: "Squirtle",
        type: "Water",
        bgColor: "blue"
    },
    {
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png",
        name: "Pidgeotto",
        type: "Flying/Normal",
        bgColor: "gold"
    },
]

const $cards = document.querySelector(".cards");

pokemons.forEach(pokemon => {

    // Destructuracion
    const {img, name, type, bgColor} = pokemon;

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
    $img.src = img
    $img.alt = name
    $h2.textContent = name
    $p.textContent = type
    
    // Estilizando mi card
    $card.className = "card"
    $card.style.backgroundColor = bgColor
})

