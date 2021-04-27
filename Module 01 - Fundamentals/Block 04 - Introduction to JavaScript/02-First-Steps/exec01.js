const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 01:
for (index in numbers) {
    console.log(numbers[index]);
}

console.log() // \n

// 02:

console.log(numbers.reduce((total, numero) => total + numero, 0));

console.log() // \n

// 03:

console.log(numbers.reduce((total, numero) => total + numero, 0) / numbers.length);

console.log();

// 04:

let valor = numbers.reduce((total, numero) => total + numero, 0) / numbers.length

console.log( (valor > 20) ? "Valor maior que 20" : "Valor menor que 20")

console.log() // \n

// 05:

let maiorNumero = numbers[0];
for (i in numbers) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
}

console.log(maiorNumero)

console.log() // \n

// 06:

let count = 0;
for (j in numbers) {
    if (numbers[j] % 2 != 0)
    count++
}

console.log((count == 0) ? "nenhum valor ímpar encontrado" : count)

console.log() // \n

// 07:

let menorNumero = numbers[0];
for (o in numbers) {
    if (numbers[o] < menorNumero) {
        menorNumero = numbers[o];
    }
}

console.log(menorNumero);

console.log() // \n

// 08:

let array = [];
let gX = 1;

for (g = 0; g < 25; g++) {
    array.push(gX);
    gX++
}

console.log(array);

console.log() // \n

// 09:

array = array.map((p) => p / 2);

console.log(array);