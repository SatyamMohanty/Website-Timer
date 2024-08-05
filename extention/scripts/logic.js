let totalTime = 0;
let timerInterval = null;

function startTimer() {
  timerInterval = setInterval(() => {
    totalTime += 10; // Increment every 10 seconds
    updateTimerDisplay(totalTime);
  }, 10000); // 10,000 milliseconds = 10 seconds
}

function updateTimerDisplay(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  let label = document.getElementById('time-spent-label');
  if (!label) {
    label = document.createElement('div');
    label.id = 'time-spent-label';
    label.style.position = 'fixed';
    label.style.top = '10px';
    label.style.right = '10px';
    label.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    label.style.color = 'white';
    label.style.padding = '5px 10px';
    label.style.zIndex = '9999';
    document.body.appendChild(label);
  }

  label.textContent = `Time spent: ${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Start the timer when the script loads
startTimer();

// Optionally, add logic to stop the timer when the page is unloaded
window.addEventListener('beforeunload', stopTimer);
