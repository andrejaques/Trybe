let a = 78;

if (a >= 90) {
    console.log("A");
} else if (a >= 80 && a < 90) {
    console.log("B");
} else if (a >= 70 && a < 80) {
    console.log("C");
} else if (a >= 60 && a < 70) {
    console.log("D");
} else if (a >= 50 && a < 60) {
    console.log("E");
} else if (a < 50 && a >= 0) {
    console.log("F")
} else {
    console.log("Erro: Nota inválida")
}
