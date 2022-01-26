console.log("Hello from pokemon")


const getPokemonAPI = async function(pokeName){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    let data = await response.json()
    return await data
}


// Get the form from the document
const pokeForm = document.getElementById('pokeForm');

// Create function to add list to html
function addToPokeList(pokemon){
    let pokeList = document.querySelector('#pokeList');
    let liEl = document.createElement('li');
    liEl.innerText = `Name: ${pokemon.name} Height: ${pokemon.height} Weight: ${pokemon.weight}`
    pokeList.append(liEl);
}

pokeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let pokeFormName = e.target.pokeName.value.toLowerCase();
    console.log(pokeFormName);
    let pokemon = await getPokemonAPI(pokeFormName);
    console.log(pokemon);
    addToPokeList(pokemon)
})
