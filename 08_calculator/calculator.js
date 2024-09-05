const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};


const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = (array) => {
  return array.reduce((product, current) => product * current);
};

const power = function() {
	
};

const factorial = function() {
	
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
