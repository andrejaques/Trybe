const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');
const botao1 = document.querySelector('.botao1');
const botao2 = document.querySelector('.botao2');

function trocaCor2() {
    if (caixaDois.style.backgroundColor === "green") {
        caixaDois.style.backgroundColor = "white";
    } else {
        caixaDois.style.backgroundColor = "green";
    }
}

function trocaCor1() {
    if (caixaUm.style.backgroundColor === "green") {
        caixaUm.style.backgroundColor = "white";
    } else {
        caixaUm.style.backgroundColor = "green";
    }
}

function trocaTextoA () {
    caixaUm.innerText = caixaTexto.value;
}

function trocaTextoB () {
    caixaDois.innerText = caixaTexto.value;
}

function warning () {
    alert("Go, Trybe!");
}

botao1.addEventListener("mouseover", trocaCor1);
botao2.addEventListener("mouseover", trocaCor2);
botao1.addEventListener("click", trocaTextoA);
botao2.addEventListener("click", trocaTextoB);
caixaTexto.addEventListener("paste", warning);