const fetchPokemon = () => {
  requestPokemon((pokemon) => {
    console.log(pokemon);
  });
};

const requestPokemon = (callback) => {
  setTimeout(() => {
    callback('Blastoise');
  }, 3000);
};

fetchPokemon();

// Blastoise!!!
