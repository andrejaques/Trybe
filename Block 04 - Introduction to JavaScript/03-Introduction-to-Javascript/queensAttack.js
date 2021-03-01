// Posição da rainha
let queenRowPosition = 4;
let queenColumnPosition = 4;

// Posição da peça oponente
let opponentRowPosition = 6;
let opponentColumnPosition = 6;

// Identifica se o ataque foi bem sucedido ou não
let sucessfulAttack = false;

// Se a coluna ou a linha da peça oponene forem iguais à coluna ou linha da rainha, o ataque é bem sucedido.
if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
    console.log('ataque bem sucedido')
    sucessfulAttack = true;
}

// Se a posição da peça oponente estiver na diagonal da rainha, o ataque é bem sucedido.
for (let index = 1; index < 8; index += 1) {
    let queenRow = queenRowPosition - index; // 1
    let queenColumn = queenColumnPosition - index; // 1

    // se a posição da coluna ou linha for igual a 0, o tabuleiro terminou
    // o loop tem que parar
    if(queenRow <= 0 || queenColumn <= 0) {
        break;
    }

    if (opponentColumnPosition === queenColumn && opponentRowPosition === queenRow) {
        console.log(`Ataque bem sucedido na coluna ${queenColumn} linha ${queenRow}`)
    }
}

for (let index = 1; index < 8; index += 1) {
    let queenRow = queenRowPosition + index; // 1
    let queenColumn = queenColumnPosition + index; // 1

    // se a posição da coluna ou linha for igual a 0, o tabuleiro terminou
    // o loop tem que parar
    if(queenRow <= 0 || queenColumn <= 0) {
        break;
    }

    if (opponentColumnPosition === queenColumn && opponentRowPosition === queenRow) {
        console.log(`Ataque bem sucedido na coluna ${queenColumn} linha ${queenRow}`)
    }
}