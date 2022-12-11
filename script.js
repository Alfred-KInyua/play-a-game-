const sguess = document.querySelector('.start_guessing');
const secret_number = Math.floor(Math.random() * 20) + 1;
const random = (document.querySelector('.random').textContent = secret_number);
const check = document.querySelector('.check');
let score = 18;

check.addEventListener('click', () => {
  const numGuess = Number(document.querySelector('.guess').value);
  if (!numGuess) {
    sguess.innerHTML = `Add a number`;
  } else if (numGuess === random) {
    sguess.innerHTML = `correct`;
    let bd = document.querySelector('body');
    bd.classList.toggle('active');
    document.querySelector('.random').style.padding = '2rem';
  } else if (numGuess > random) {
    if (score == 1) {
      sguess.innerHTML = `You lost!`;
    } else {
      sguess.innerHTML = `Too HIgh`;
      score--;
      const scores = Number(
        (document.querySelector('.scores').textContent = score)
      );
    }
  } else if (numGuess < random) {
    if (score == 1) {
      sguess.innerHTML = `You Lost!`;
    } else {
      sguess.innerHTML = `Too Low`;
      score--;
      const scores = Number(
        (document.querySelector('.scores').textContent = score)
      );
    }
  }
});
