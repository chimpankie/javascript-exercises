const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  const final = array.reduce((total, amount) => {
    return total + amount;
  }, 0)
  return final;
};

const multiply = function(array) {
  const final = array.reduce((a, b) => a * b);
  return final;
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(a) {
  let total = 1
  for(let i=1; i<=a; i++){
    total *= i;
  }
  return total;
	
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
