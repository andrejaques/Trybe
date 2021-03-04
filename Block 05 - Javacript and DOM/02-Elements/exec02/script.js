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

// require 03
let centerContent = document.createElement('div');
centerContent.className = 'center-content';

mainContent.appendChild(centerContent);

// require 04
let pTag = document.createElement('p');
pTag.innerHTML = "Linux initializing ...<br> Initializing advanced hardware ...<br> Setting up modules ...<br>Initializing network ...";

centerContent.appendChild(pTag);

// require 05
let leftContent = document.createElement('div');
leftContent.className = 'left-content';

mainContent.appendChild(leftContent);

// require 06
let rightContent = document.createElement('div');
rightContent.className = 'right-content';

mainContent.appendChild(rightContent);

// require 07
let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';

leftContent.appendChild(img);

// require 08
let lista = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
let numberList = document.createElement('ul');
rightContent.appendChild(numberList)
for (let index = 0; index < lista.length; index++) {
    let numero = document.createElement('li');
    numero.innerHTML = lista[index];
    numberList.appendChild(numero);
}

// require 09
let h3Tag01 = document.createElement('h3');
let h3Tag02 = document.createElement('h3');
let h3Tag03 = document.createElement('h3');

mainContent.appendChild(h3Tag01);
mainContent.appendChild(h3Tag02);
mainContent.appendChild(h3Tag03);
