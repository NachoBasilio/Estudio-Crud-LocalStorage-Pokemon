//variables globales
const formularioUI = document.querySelector('#formulario')
const listaDePokemonUI = document.querySelector('#listaPokemon')
let pokemonUI = document.querySelector('#pokemon')
let arrayPokemon = []
let contador = 0


//CSS
import './styles/index.css'

//modulos
import uniqid from 'uniqid'
import { todosLosPokemon, numeroPokemon } from './llamaPokemon'

//Agregar una funcion al prototype de string
Object.defineProperty(String.prototype, 'capitalizarPrimeraLetra', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    writable: true, 
    configurable: true 
})

//Llama pokemon
todosLosPokemon().then(res => {
    pokemonUI.innerHTML = ''
    res.results.forEach(item => {
        //agregar opciones al select
        pokemonUI.innerHTML += `
            <option class="pokemonOption" value="${item.name}">${item.name.capitalizarPrimeraLetra()}</option>
        `
    })
})

//Funciones
const crearPokemon = (nombre, numero, tipo) => {
    let item = {
        nombre: nombre,
        id: uniqid(),
        url: numero,
        tipo: tipo
    }
    arrayPokemon.push(item)
}

const guardarPokemon = () => {
    localStorage.setItem("pokemon", JSON.stringify(arrayPokemon))
    pintarDB()
}

const pintarDB = () => {
    listaDePokemonUI.innerHTML = ''
    arrayPokemon = JSON.parse(localStorage.getItem("pokemon"))
    if(arrayPokemon === null){
        arrayPokemon = []
    }else{
        arrayPokemon.forEach(item => {
            switch(item.tipo){
                    case 'normal':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon normal">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'fire':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon fire">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'water':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon water">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'electric':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon electric">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'grass':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon grass">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'ice':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon ice">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'fighting':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon fighting">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'poison':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon poison">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'ground':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon ground">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'flying':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon flying">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'psychic':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon psychic">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'bug':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon bug">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'rock':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon rock">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'ghost':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon ghost">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'dragon':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon dragon">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'dark':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon dark">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'fairy':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon fairy">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'steel':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon steel">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    case 'unknown':
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon unknown">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
                    default:
                    listaDePokemonUI.innerHTML += `
                    <div class="Contenedor_de_pokemon">
                    <p class="nombre_pokemon">${item.nombre.capitalizarPrimeraLetra()}</p>
                    <p class="id">${item.id}</p>
                    <img src="${item.url}" alt="">
                    <span class="Contenedor-botones  ">
                    <span class="material-icons">delete</span>
                    </span>
                    </div>
                    `
                    break;
            }
        })
    }
}

const eliminarDB = (idPokemon) => {
    let indexArray = arrayPokemon.findIndex(item => item.id === idPokemon)
    arrayPokemon.splice(indexArray, 1)
    contador--
    guardarPokemon()

}

//Eventos 
formularioUI.addEventListener('submit', async (e) => {
    e.preventDefault()
    if(contador === 6){
        alert('No puedes agregar mas pokemon')
    }else{
        let pokemonUI = document.querySelector('#pokemon').value
        numeroPokemon(pokemonUI).then(res =>{
        let url = res.sprites.front_default
        let typePokemon = res.types[0].type.name
        console.log(typePokemon)
        crearPokemon(pokemonUI, url, typePokemon)
        contador++
        guardarPokemon()
    })
    }
    
})

listaDePokemonUI.addEventListener('click', (e) => {
    e.preventDefault()
    let text = e.path[2].children[1].innerHTML
    
    if(e.target.innerHTML === 'delete'){
        eliminarDB(text) 
    }
    
})

document.addEventListener('DOMContentLoaded', pintarDB)