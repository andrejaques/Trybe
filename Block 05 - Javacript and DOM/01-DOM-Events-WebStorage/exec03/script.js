// scripts 
function changeText (element, text, elementNumber) {
    let arrayElement = document.querySelectorAll(element);
    arrayElement[elementNumber].innerText = text;
}

function changeColor (element, color) {
    let element01 = document.querySelector(element);
    element01.style.backgroundColor = color;
}

function upperText (element) {
    let arrayElement = document.querySelectorAll(element);
    for (index = 0; index < arrayElement.length; index += 1) 
    arrayElement[index].style.textTransform = "uppercase";
}

// request 01
changeText("p", "Fazendo entrevista para uma vaga pleno", 1);
//request 02
changeColor(".main-content", "rgb(76,164,109)");
// request 03
changeColor(".center-content", "white");
// request 04
changeText("h1", "Exercício 5.1 - JavaScript (EC6)", 0);
// request 05
upperText("p");
