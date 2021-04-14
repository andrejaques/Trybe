// Dado uma matriz de matrizes, transforme em uma única matriz.


const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const onlyOne = arrays.reduce((acc, unit) => {
    acc = acc.concat(unit);
    return acc;
  }, []);
  return onlyOne;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

console.log(flatten());
console.log('-------------');
console.log(arrays.flat());
