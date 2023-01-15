const result = document.querySelector('.result');
const mathBtns = document.querySelectorAll('button');

mathBtns.forEach(button => button.addEventListener('click', () => {
   result.textContent = button.textContent;
 }));
