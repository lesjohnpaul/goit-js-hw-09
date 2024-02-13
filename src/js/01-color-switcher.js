const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

startButton.addEventListener('click', function () {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
  startButton.classList.add('disabled');
  stopButton.disabled = false;
  stopButton.classList.remove('disabled');
});

stopButton.addEventListener('click', function () {
  clearInterval(intervalId);
  stopButton.disabled = true;
  stopButton.classList.add('disabled');
  startButton.disabled = false;
  startButton.classList.remove('disabled');
});
