// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const joke = document.querySelector('#jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      joke.innerHTML = data.joke;
    })
    .catch((err) => console.log(`O erro foi: ${err}`));
};

window.onload = () => fetchJoke();