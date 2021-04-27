const caixaUm = document.querySelector(".caixa1");
const caixaDois = document.querySelector(".caixa2");

function trocaCor() {
    if (caixaDois.style.backgroundColor === "cyan") {
        caixaDois.style.backgroundColor = "red";
    } else {
        caixaDois.style.backgroundColor = "cyan";
    }
}

caixaUm.addEventListener("click", trocaCor);
