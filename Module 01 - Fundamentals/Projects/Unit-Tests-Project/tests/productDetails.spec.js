const assert = require('assert');

const productDetails = require('../src/productDetails');

const funcFull = (productDetails('Álcool gel', 'Máscara'));

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(funcFull), true);
    assert.strictEqual(funcFull.length, 2);
    assert.strictEqual(typeof (funcFull[0]), 'object');
    assert.strictEqual(typeof (funcFull[1]), 'object');
    assert.strictEqual(funcFull[0] !== funcFull[1], true);
    assert.strictEqual(funcFull[0].details.productId.slice(-3), '123');
    assert.strictEqual(funcFull[1].details.productId.slice(-3), '123');
  });
});
