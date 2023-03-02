const add = function(numOne, numTwo) {
    return numOne + numTwo; 
};

const subtract = function(num, newNum) {
    return num - newNum;
};

const sum = function(array) {

return  array.reduce((a, b) => {
    return a + b;
  }, 0);

};

const multiply = function(array) {
  let output = 1;

  for (let i = 0; i < array.length; i++) {
    output *= array[i];
  }

  return output
};

const power = function(numOne, numTwo) {
    return Math.pow(numOne, numTwo);
};

const factorial = function(num) {

  let result = num;

  if (num === 0 || num === 1){
    return 1;
  }

  while (num > 1) {
    num--;
    result = result * num;
  };

  return result


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
