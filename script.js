let sguess = document.querySelector('.start_guessing');
let secret_number = Math.floor(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  let numGuess = Number(document.querySelector('.guess').value);
  if (!numGuess) {
    sguess.innerHTML = `Add a number`;
  } else if (numGuess === secret_number) {
    sguess.innerHTML = `correct`;
    document.querySelector('.random').textContent = secret_number;
    let bd = document.querySelector('body');
    bd.classList.toggle('active');
    document.querySelector('.random').style.padding = '2rem';
  } else if (numGuess > secret_number) {
    if (score == 1) {
      sguess.innerHTML = `You lost!`;
    } else {
      sguess.innerHTML = `Too HIgh`;
      score--;
      Number((document.querySelector('.scores').textContent = score));
    }
  } else if (numGuess < secret_number) {
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
const again = document.querySelector('.again');
again.addEventListener('click', () => {
  score = 20;
  secret_number = Math.floor(Math.random() * 20) + 1;
  Number((document.querySelector('.guess').value = 0));
  document.querySelector('.start_guessing').textContent = 'start guessing';
  Number((document.querySelector('.scores').textContent = score));
});
