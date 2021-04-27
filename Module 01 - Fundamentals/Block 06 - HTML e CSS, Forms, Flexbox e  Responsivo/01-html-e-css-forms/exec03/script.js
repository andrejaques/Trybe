const estadosInput = document.querySelector('#estados-input');
const estados = [
    "Espírito Santo",
    "Amazonas",
    "Maranhão",
    "Pernambuco",
    "Paraíba",
    "Acre",
    "Alagoas",
    "Amapá",
    "Bahia",
    "Ceará",
    "Goiás",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraná",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônio",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
    "Distrito Federal"
];
const estadosS = estados.sort();

for (let index = 0; index < estadosS.length; index += 1) {
    let estado = document.createElement('option');
    estado.innerText = estadosS[index];
    estado.value = estadosS[index];
    estadosInput.appendChild(estado);
}
