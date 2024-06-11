
const offset= 0
const limit =10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${offset}'

function convertPokemonToHtml(pokemon) {
   return  `
           <li class="pokemon">
              <span class="number">#001</span>
              <spam class="name">${pokemn.name}</span>
              
                <div class="detail">
                  <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                  </ol>

                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                        alt="${pokemn.name}">
                </div>
            </li>
      `
   }

  const pokemonList = document.getElementById('pokemonList')

   fetch(url)
   .then((response) => response.json())
   .then((jsonBody) => jsonBody.results)
   .then((pokemons) => {
      for (let i = 0; i < pokemonList.lengt; i++) { 
            const pokemon = pokemonList[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
      }
   })
   .catch((error)=>console.error(error))