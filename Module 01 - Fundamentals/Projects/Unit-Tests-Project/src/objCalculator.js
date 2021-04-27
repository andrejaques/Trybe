const calculator = {
  add: (a, b) => a + b,
  mult: (a, b) => a * b,
  div: (a, b) => Math.floor(a / b),
  sub: (a, b) => a - b,
};

module.exports = calculator;
console.log(calculator.add(3, 7));
console.log(calculator.sub(3, 7));
console.log(calculator.mult(3, 7));
console.log(calculator.div(3, 7));
