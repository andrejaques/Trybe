let nota = 65;
let candidado;

if (nota >= 80) {
    candidato = "aprovado"
} else if (nota < 80 && nota >= 60) {
    candidato = "lista"
} else {
    candidato = "reprovado"
}

switch (candidato) {
    case "aprovado":
        console.log("Parabéns, você foi aprovado(a)!");
        break;
    
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;

    case "reprovado":
        console.log("Você foi reprovado");
        break;

    default:
        console.log("não se aplica");
}