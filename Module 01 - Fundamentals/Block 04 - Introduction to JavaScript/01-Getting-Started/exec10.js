let a = "bispo";
let b = a.toLowerCase();

switch (b) {
    case ("peão"):
        console.log("move-se uma casa para frente, ou duas se for seu primeiro movimento");
        break;

    case ("cavalo"):
        console.log("move-se em L, sendo duas casas para uma direção e uma para outra ou o inverso")
        break;

    case ("torre"):
        console.log("move-se ilimitadamente para frente, trás ou lados.")
        break;

    case ("bispo"):
        console.log("move-se na diagonal ilimitado");
        break;

    case ("rainha"):
        console.log("move-se em qualquer direção ilimitado");
        break;
    
    case ("rei"):
        console.log("move-se apenas uma casa e se a patroa deixar")
        break;

    default:
        console.log("Erro. Peça inválida.")
}
