const guess = Number(document.querySelector('.guess').value);
const check = document.querySelector('.cl');
const startGuessing = document.querySelector('.start_guessing');
check.addEventListener('click', () => {
  if (!guess) {
    startGuessing.innerHTML = `<h1>Please enter a number<h1/>`;
   
  }
});
