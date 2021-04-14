const fetch = require("node-fetch");

const fetchPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      response.json().then((data) => {
        console.log(`${data.name} is a pokemon of the type ${data.types[0].type.name}`);
      })
    })
}

fetchPokemon('charmander');
