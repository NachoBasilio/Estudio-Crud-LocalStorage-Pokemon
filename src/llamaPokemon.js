const url = "https://pokeapi.co/api/v2/pokemon?limit=1126"

const todosLosPokemon = async () => {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    return datos
}

const numeroPokemon = async (nombrePokemon) => {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    const datos = await respuesta.json()
    return datos
}

export {todosLosPokemon, numeroPokemon}


