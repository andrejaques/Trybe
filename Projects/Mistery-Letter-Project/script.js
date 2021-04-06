const buttonGenLetter = document.getElementById('criar-carta');
const pElement = document.getElementById('carta-gerada');

// ------ function clear all before generate letter ---
function clearAll() {
    while (pElement.firstChild) {
        pElement.removeChild(pElement.firstChild);
    }
}

buttonGenLetter.addEventListener('click', clearAll);

// ------- function generate letter ---------
function generateLetter() {
    const textD = document.getElementById('carta-texto').value;
    const span = textD.split(' ');
    for (let index = 0; index < span.length; index += 1) {
        const tagSpan = document.createElement('span');
        tagSpan.innerText = span[index];
        tagSpan.value = span[index];
        pElement.appendChild(tagSpan);
    }
    if (textD === '' || textD === ' ') {
        pElement.innerText = 'Por favor, digite o conteúdo da carta.';
    }
}

buttonGenLetter.addEventListener('click', generateLetter);

// ------ function styleLetter ------
const G1 = ['newspaper', 'magazine1', 'magazine2'];
const G2 = ['medium', 'big', 'reallybig'];
const G3 = ['rotateleft', 'rotateright'];
const G4 = ['skewleft', 'skewright'];
let sortedClasses = [];

function randomStyles() {
    const numberOfStyles = (Math.ceil(Math.random() * 2)) + 2;
    let counter = 1;
    const ClassesInside = [G1, G2, G3, G4];
    sortedClasses = [];
    while (counter <= numberOfStyles) {
        const sorted = (Math.ceil(Math.random())) * (ClassesInside.length - 1);
        sortedClasses.push(ClassesInside[sorted]);
        ClassesInside.splice(sorted, 1);
        counter += 1;
    }
}

function styleLetter() {
    const words = document.querySelectorAll('span');
    for (let index = 0; index < words.length; index += 1) {
        randomStyles();
        for (let indexS = 0; indexS < sortedClasses.length; indexS += 1) {
            const classL = sortedClasses[indexS];
            const large = classL.length;
            const randomN = Math.ceil(Math.random() * (large - 1));
            words[index].classList.add(classL[randomN]);
        }
    }
}

buttonGenLetter.addEventListener('click', styleLetter);

// ------- function contador de letrinhas -----
const cartaContador = document.querySelector('#carta-contador');

function countWords() {
    let contador = 0;
    const span = document.querySelectorAll('span');
    for (let index = 0; index < span.length; index += 1) {
        contador += span[index].value.length;
    }
    cartaContador.innerHTML = contador;
}

buttonGenLetter.addEventListener('click', countWords);
