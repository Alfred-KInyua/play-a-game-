let sguess = document.querySelector('.start_guessing');
let secret_number = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const messages = (msg) => {
  sguess.innerHTML = `${msg}`;
};
document.querySelector('.check').addEventListener('click', () => {
  let numGuess = Number(document.querySelector('.guess').value);

  if (!numGuess) {
    messages('Add a number');
  } else if (numGuess === secret_number) {
    messages('Correct');
    document.querySelector('.random').textContent = secret_number;
    let bd = document.querySelector('body');
    bd.classList.toggle('active');
    document.querySelector('.random').style.padding = '2rem';

    if (score > highscore) {
      highscore = score;
      high = document.querySelector('.highscore').textContent = highscore;
    }
  } else if (numGuess > secret_number || numGuess < secret_number) {
    if (score == 1) {
      messages('You lost!');
    } else {
      messages(numGuess > secret_number ? 'Too High' : 'Too Low');
      score--;
      Number((document.querySelector('.scores').textContent = score));
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
  document.querySelector('body').classList.remove('active');
  document.querySelector('.random').textContent = '?';
});
