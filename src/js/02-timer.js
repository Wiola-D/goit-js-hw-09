import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');
const timerDay = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

btnStart.disabled = true;
let today;
let selectDate;
let remainingTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    today = new Date();
    selectDate = new Date(selectedDates);
    if (selectDate < today) {
      Notiflix.Notify.failure('Please select a future date');
    } else {
      btnStart.disabled = false;
      remainingTime = selectDate - today;
      console.log(remainingTime);
    }
  },
};

flatpickr('#datetime-picker', options);
btnStart.addEventListener('click', () => {
  countDownTime(remainingTime);
  btnStart.disabled = true;
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const addLeadingZero = value => value.toString().padStart(2, '0');

const countDownTime = time => {
  setInterval(() => {
    if (time - 500 > 0) {
      let timerInner = convertMs(time);
      time -= 1000;
      timerDay.innerHTML = addLeadingZero(timerInner.days);
      timerHours.innerHTML = addLeadingZero(timerInner.hours);
      timerMinutes.innerHTML = addLeadingZero(timerInner.minutes);
      timerSeconds.innerHTML = addLeadingZero(timerInner.seconds);
    }
  }, 1000);
};
