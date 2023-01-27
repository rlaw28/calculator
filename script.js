const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous');
const equal = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let currentValue = '';
let previousValue = '';

numbers.forEach((number) => number.addEventListener('click', function(e){
  handleNumber(e.target.textContent);
  currentScreen.textContent = currentValue;
}))

operators.forEach((op) => op.addEventListener('click', function (e) {
  handleOpertator(e.target.textContent);
  previousScreen.textContent = previousValue + " " + operator;
  currentScreen.textContent = currentValue;
}))

function handleNumber(num) {
  if (currentValue.length <= 20) {
    currentValue += num;
  }
}
function handleOpertator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

const operate = function ( num1, operator, num2) {
  if (operator === '+') {
    return num1 + num2
  }
  else if (operator === '-') {
    return num1 - num2
  }
  else if (operator === '*') {
    return num1 * num2
  }
  else if (operator === '/') {
    return num1 / num2
  }
  else {
    return 'Error'
  }
};
operate();

