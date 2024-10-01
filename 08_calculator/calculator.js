const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0 )
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
    return total * current;
  })
};

const power = function(a, b) {
  return a**b;
}

const factorial = function(n) {
	let ans = 1;

  if(n === 0)
    return 1;
  for (let i = 2; i <= n; i++)
    ans *= i;
  return ans;
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
