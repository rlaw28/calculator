const result = document.querySelector('.result');
const mathBtns = document.querySelectorAll('button');

let runningTotal = 0
result.innerText = 0

mathBtns.forEach(button => button.addEventListener('click', () => {
  let currentNum = button.textContent
  result.innerText += currentNum;
  }));

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

