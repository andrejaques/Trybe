let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    };

// 01 
console.log(`Bem-vinda, ${info.personagem}`);

console.log() // \n

// 02 
info.recorrente = "Sim";

console.log(info.recorrente);

console.log() // \n

//03
for (index in info) {
    console.log(index)
};

console.log() // \n

//04
for (index in info) {
    console.log(info[index])
};

console.log() // \n

// 05
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

function checkRecorrente(user1,user2) {
    if (user1.recorrente == "Sim" && user2.recorrente == "Sim") {
        return "Ambos recorrente";
    } else if (user1.recorrente =="Não" && user2.recorrente == "Não") {
        return "Ambos não recorrentes";
    } else {
        return user1.recorrete + " " + user2.recorrente;
    }
}

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);
console.log(checkRecorrente(info, info2));
