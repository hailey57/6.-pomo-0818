const STORAGE_KEY = "pomodoroMinutes";
const DEFAULT_MINUTES = 25;

const timeDisplay = document.getElementById("time-display");

function getSavedMinutes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const minutes = Number(saved);
  return saved !== null && Number.isInteger(minutes) && minutes > 0
    ? minutes
    : DEFAULT_MINUTES;
}

let remainingSeconds = getSavedMinutes() * 60;
let timerId = null;

updateDisplay();

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    if (remainingSeconds <= 0) {
      stopTimer();
      return;
    }
    remainingSeconds--;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = getSavedMinutes() * 60;
  updateDisplay();
}
