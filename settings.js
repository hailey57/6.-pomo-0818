const STORAGE_KEY = "pomodoroMinutes";
const MIN_MINUTES = 1;
const MAX_MINUTES = 60;

const minutesInput = document.getElementById("timer-minutes");

function loadSavedMinutes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    minutesInput.value = saved;
  }
}

function saveSettings() {
  const value = minutesInput.value;

  if (value === "") {
    alert("타이머 시간을 입력해 주세요.");
    return;
  }

  const minutes = Number(value);

  if (!Number.isInteger(minutes) || minutes < MIN_MINUTES || minutes > MAX_MINUTES) {
    alert(`타이머 시간은 ${MIN_MINUTES}분 이상 ${MAX_MINUTES}분 이하로 설정해 주세요.`);
    return;
  }

  localStorage.setItem(STORAGE_KEY, String(minutes));
  location.href = "index.html";
}

loadSavedMinutes();
