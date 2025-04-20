let timer;
let timeLeft = 1500;
let isRunning = false;

const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const stopBtn = document.getElementById("stop-btn");
const modeButtons = document.querySelectorAll(".mode-btn");
const timerSound = document.getElementById("timer-sound");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        timerSound.play();
        isRunning = false;
        alert("Time's up!");
      }
    }, 1000);
  }
}

function resetTimer() {
  timeLeft = 1500;
  updateDisplay();
  stopTimer();
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  updateDisplay();
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    timeLeft = parseInt(button.dataset.time);
    updateDisplay();
    stopTimer();
  });
});

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);

updateDisplay();
