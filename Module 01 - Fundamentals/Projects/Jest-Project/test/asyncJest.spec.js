/* const assert = require('assert'); */
const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const test = await answerPhone(true);
    expect(test).toEqual('Oi!');
  });

  test('ocupado', async () => {
    try {
      await answerPhone(false);
    } catch (err) {
      expect(err.message).toBe('Infelizmente não podemos atender...');
    }
  });
});
