const currentNum = document.querySelector('.current');
const equal = document.querySelector('.equal');
const number = document.querySelectorAll('.number');
const operator = documnet.querySelectorAll('.operator');

current.innerText = ''

// mathBtns.forEach(button => button.addEventListener('click', () => {
//   let currentNum = button.textContent
//   result.innerText += currentNum;
// }));
  
// calculate.addEventListener('click', () => {
//  operate();
// })

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

