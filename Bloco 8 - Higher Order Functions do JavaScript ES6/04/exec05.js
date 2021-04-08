// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const wordsConcat = names.flat().toString().toLowerCase();
  let counter = (wordsConcat.match(/a/g) || []).length;
  return counter;
}

assert.deepStrictEqual(containsA(), 20);

console.log(containsA());

// agora fazer com reduce kkkkk
