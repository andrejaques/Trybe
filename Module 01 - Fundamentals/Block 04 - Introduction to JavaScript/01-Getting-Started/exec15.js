let salarioBruto = 3500;
let taxaInss;
let inss;
let taxaIr;
let ir;

if (salarioBruto <= 1556.94) {
    taxaInss = "8%";
    inss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    taxaInss = "9%"
    inss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.91 && salarioBruto <= 5189.81) {
    taxaInss = "10%"
    inss = salarioBruto * 0.10;
} else if (salarioBruto > 5189.81) {
    taxaInss = "11%"
    inss = salarioBruto * 0.11;
} else {
    return console.log("Erro: salário inválido")
}

if (salarioBruto <= 1903.98) {
    taxaIr = "Isento";
    ir = salarioBruto * 0;
} else if (salarioBruto > 1903.98 && salarioBruto <= 2826.65) {
    taxaIr = "7.5%";
    ir = salarioBruto * 0.075;
} else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
    taxaIr = "15%";
    ir = salarioBruto * 0.15;
} else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
    taxaIr = "22.5%";
    ir = salarioBruto * 0.225;
} else if (salarioBruto > 4664.68) {
    taxaIr = "27%";
    ir = salarioBruto * 0.27;
} else {
    return console.log("Erro: salário inválido")
}

let salarioLiquido = salarioBruto - ir - inss;

console.log(salarioLiquido);