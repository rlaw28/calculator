const result = document.querySelector('.result');
const mathBtns = document.querySelectorAll('button');

mathBtns.forEach(button => button.addEventListener('click', () => {
   result.textContent = button.textContent;
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

console.log(operate(3, '+', 3));
