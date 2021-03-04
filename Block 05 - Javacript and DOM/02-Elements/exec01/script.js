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
console.log(atencao)