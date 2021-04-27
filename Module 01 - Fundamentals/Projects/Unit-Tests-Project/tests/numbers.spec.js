/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const numbers = require('../src/numbers');

describe('#numbers', () => {
  it('should return an array and return if it has only numbers or not', () => {
    assert.strictEqual(numbers([1, 2, 3, 4, 5]), true);
    assert.strictEqual(numbers([1, 2, '3', 4, 5]), false);
    assert.strictEqual(numbers([1, 'a', 3]), false);
    assert.strictEqual(numbers([' ']), false);
  });
});
