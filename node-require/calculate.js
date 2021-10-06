const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operator = process.argv[3];
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);
if (operator === 'plus') {
  add(num1, num2);
} else if (operator === 'minus') {
  subtract(num1, num2);
} else if (operator === 'times') {
  multiply(num1, num2);
} else if (operator === 'over') {
  divide(num1, num2);
}
