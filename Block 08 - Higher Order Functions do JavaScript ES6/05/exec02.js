/* Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
Dica: use parâmetro rest . */

const assert = require('assert');

function sum(...att) {
  return att.reduce((acc, crr) => acc + crr, 0);
};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

console.log(sum());
console.log(sum(5));
console.log(sum(1, 5, 4));
