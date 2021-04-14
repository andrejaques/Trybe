/* Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
Dica: use default params .*/

const assert = require('assert');

function greet(name, greeting = 'Hi') {
    return `${greeting} ${name}`;
}

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');

console.log(greet('John'));
console.log(greet('John', 'Hello hello'));
