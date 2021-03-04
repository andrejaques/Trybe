// require 01
let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");

// require 02
let pai = elementoOndeVoceEsta.parentNode;
pai.style.backgroundColor = "#ddd";

// require 03
let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerHTML = "Sou o primeiro filho do filho";

// require 04
let primeiroFilho = pai.firstChild;

// require 05
primeiroFilho = elementoOndeVoceEsta.previousElementSibling;

// require 06
let atencao = elementoOndeVoceEsta.nextSibling;

// require 07
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// require 08
terceiroFilho = pai.firstChild.nextElementSibling.nextElementSibling.nextElementSibling;

/*---------------- EXEC 02 ----------------*/


// require 01
let elementoOndeVoceEstaIrmao = document.createElement('div');
elementoOndeVoceEstaIrmao.innerText = 'Sou um irmão de onde estou'
pai.appendChild(elementoOndeVoceEstaIrmao);

// require 02
let filhoBastardo = document.createElement('div');
filhoBastardo.id = "filhoBastardo"
elementoOndeVoceEsta.appendChild(filhoBastardo);

// require 03
let filhoAnimal = document.createElement('div');
filhoAnimal.id = "filhoAnimal";
primeiroFilhoDoFilho.appendChild(filhoAnimal);

// require 04
terceiroFilho = filhoAnimal.parentNode.parentNode.nextElementSibling;
console.log(terceiroFilho)