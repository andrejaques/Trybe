const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.strictEqual(typeof (circle(1)), 'object');
    assert.strictEqual(Object.keys(circle(1)).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.strictEqual(circle(2).radius, 2);
    assert.strictEqual(parseFloat(circle(3).area.toFixed(2)), 28.26);
    assert.strictEqual(circle(3).radius, 3);
    assert.strictEqual(parseFloat(circle(3).area.toFixed(2)), 28.26);
    assert.strictEqual(parseFloat(circle(3).circumference.toFixed(2)), 18.84);
  });
});
