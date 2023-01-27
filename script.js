const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let currentValue = '';
let previousValue = '';
let op = operators;

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

equal.addEventListener('click', function () {
  operate();
  previousScreen.textContent = '';
  currentScreen.textContent = previousValue;
});

clear.addEventListener('click', () => {
  previousValue = '';
  currentValue = '';
  operator = '';
  currentScreen.textContent = currentValue;
  previousValue.textContent = currentValue;
})


const operate = function () {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === '+') {
    previousValue += currentValue;
  }
  else if (operator === '-') {
   previousValue -= currentValue;
  }
  else if (operator === '×') {
   previousValue *= currentValue;
  }
  else if (operator === '÷') {
   previousValue /= currentValue;
  }
  else {
    return 'Please enter equation.'
  }

  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
};


