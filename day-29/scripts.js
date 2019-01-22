let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  
  displayTimeLeft(seconds);
  displayEndTime(then);

  // Setting this intervale to equal the countdown in our
  // global namespace so that when we clear the interval
  // the whole interval is cleared.
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft <= 0) {
      clearInterval(countdown);
    }
    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  timerDisplay.textContent = display;
  // We can also update the title tag
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  let hour = end.getHours();
  const minutes = end.getMinutes();

  if(hour > 12) {
    hour = hour - 12
  } else if( hour === 0) {
    hour = 12
  }

  endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}


function startTimer() {
  timer(this.dataset.time);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
// If your element has a name attribute it's accessible from the document.
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const seconds = this.minutes.value;
  timer(seconds * 60);
  this.reset();
})