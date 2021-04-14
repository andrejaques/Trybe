// add pokemon name and image in the html
const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name} </br> ${img.outerHTML}`;

  ul.appendChild(li);
};

const fetchPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      response.json().then((data) => {
        appendPokemon(data)
      })
    })
};

window.onload = () => {
  fetchPokemon('charmander')
  fetchPokemon('squirtle');
  fetchPokemon('bulbasaur');
};
