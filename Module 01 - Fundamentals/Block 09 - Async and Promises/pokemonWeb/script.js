// add pokemon name and image in the html
const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name} </br> ${img.outerHTML}`;

  ul.appendChild(li);
};

/* const fetchPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      response.json().then((data) => {
        appendPokemon(data)
      })
    })
}; */

const getPokemonPromise = (pokemonName) => {
  return new Promise((resolve, reject) => {
    if (pokemonName == 'rattat') {
      reject('Esse pokemon é muito top para essa lista!')
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        response.json().then((data) => {
          appendPokemon(data);
          resolve();
        });
      });
    }
  });
};


const fetchPokemon = async (pokemonName) => {
  try {
    await getPokemonPromise(pokemonName);
  } catch (error) {
    console.log(error);
  };
};

window.onload = async () => {
  await fetchPokemon('charmander')
  await fetchPokemon('squirtle');
  await fetchPokemon('bulbasaur');
  await fetchPokemon('cyndaquil');
  await fetchPokemon('totodile');
  await fetchPokemon('chikorita');
  await fetchPokemon('torchic');
  await fetchPokemon('mudkip');
  await fetchPokemon('treecko');
};