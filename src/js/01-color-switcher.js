const btnStart = document.querySelector('.js-start');
const btnStop = document.querySelector('.js-stop');
const bg = document.querySelector('body');
let timerId = null;
btnStop.disabled = true;

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    bg.style.background = getRandomHexColor();
  }, 1000);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  btnStart.disabled = true;
  btnStop.disabled = false;
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
