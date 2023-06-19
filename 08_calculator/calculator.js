const add = function(a,b) {
	return a + b;
};
const subtract = function(a,b) {
	return a - b;
};

const sum = function() {
  let array = [...arguments];
  let result = array[0].reduce( function(value,total) {
    return value + total;
  }, 0);
  return result;
};
console.log(sum([7,11]));
const multiply = function() {
  let array = Array.from(arguments);
  let result = array.reduce(function(value, product) {
    return value*product;
    }, 1);
  return result;
};

const power = function(a,b) {
  switch (b) {
    case 0: return 1;
    case 1: return a;
    case -1: return 1/a;
  }
	if (b<-1) {
    return a*power(a,b+1);
  }
  if (b>1) {
    return a*power(a,b-1);
  }
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }
  return a * factorial(a-1);
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
