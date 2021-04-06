const average = (arrayNumbers) => {
  let result = 0;
  if (arrayNumbers.length === 0) {
    return undefined;
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (typeof (arrayNumbers[index]) !== 'number') {
      return undefined;
    }
    result += (arrayNumbers[index]) / arrayNumbers.length;
  }
  return Math.round(result);
};

module.exports = average;
