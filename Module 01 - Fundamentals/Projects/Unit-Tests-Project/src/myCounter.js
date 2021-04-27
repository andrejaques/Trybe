const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let number = 2; number <= 3; number += 1) {
      myArray.push(number);
    }
  }
  return myArray;
};

module.exports = myCounter;
console.log(myCounter());
