// Array vazio que terá os números sorteados
let megaSenaNumbers = [0, 0, 0, 0, 0, 0];

function randomNumberSena() {
    let nSena;
    nSena = Math.ceil(Math.random() * 60);
    while (nSena == 0) {
        nSena = randomNumberSena();
    }
    return nSena
}

for (i = 0; i < megaSenaNumbers.length; i++) {
    let randomNumber = randomNumberSena()
    while (megaSenaNumbers.indexOf(randomNumber) == -1) {
        megaSenaNumbers[i] = randomNumber;
    }
}

console.log(megaSenaNumbers)
