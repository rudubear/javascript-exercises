const add = function(num1, num2) {
  return Number(num1) + Number(num2);
	
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2);
};

const sum = function(args) {
  let mySum = 0;
  for(const num of Array.from(args)) {
    mySum += num;
  }
  return mySum;
};

const multiply = function(args) {
  let myProduct= 1;
  for(const num of Array.from(args)) {
    myProduct *= num;
  }
  return myProduct;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let value = 1;
  if (num > 0) {
    for (let i = 1; i <= num; i ++) {
      value *= i; 
    }
  }
  return value;
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
