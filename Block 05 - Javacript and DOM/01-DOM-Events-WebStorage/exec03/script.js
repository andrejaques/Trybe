// scripts 
function changeText (element, text, elementNumber) {
    let arrayElement = document.querySelectorAll(element);
    arrayElement[elementNumber].innerText = text;
}

function changeColor (element, color) {
    let element01 = document.querySelector(element);
    element01.style.backgroundColor = color;
}

changeText("p", "Fazendo entrevista para uma vaga pleno", 1);
changeColor(".main-content", "rgb(76,164,109)");

