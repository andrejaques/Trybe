const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');

function changeColors () {
    if (caixaUm.style.backgroundColor === "red" && caixaDois.style.backgroundColor === "yellow") {
        caixaUm.style.backgroundColor = 'white';
        caixaDois.style.backgroundColor = 'white';
    } else {
        caixaUm.style.backgroundColor = 'red';
        caixaDois.style.backgroundColor = 'yellow';
    }

}

function trocaCor () {
    if (caixaDois.style.backgroundColor === "blue") {
        caixaDois.style.backgroundColor = "white";
    } else {
        caixaDois.style.backgroundColor = "blue";
    }
}

caixaUm.addEventListener("click", trocaCor);
caixaDois.addEventListener("dblclick", changeColors);
