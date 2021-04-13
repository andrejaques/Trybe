const fetch = require("node-fetch");

function urlPokemon(pokemon){
  return 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
}

const fetchPokemon = (pokemon) => {
  fetch(urlPokemon(pokemon))
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
      })
    })
}

fetchPokemon('charmander');
