// scripando

// require 01
let body = document.querySelector('body');

let h1 = document.createElement('h1');
h1.id = 'title';
h1.innerHTML = "Exercício 5.2 - JavaScript DOM";
h1.style.background = "rgb(117, 117, 117)";
h1.style.color = "green";
h1.style.textAlign = "center";
h1.style.textShadow = "3px 3px 1px black"

body.appendChild(h1);

// require 02
let mainContent = document.createElement('div');
mainContent.className = 'main-content';

body.appendChild(mainContent);

//