
const days = document.querySelector(".days h2");
const hours = document.querySelector(".hours h2");
const minutes = document.querySelector(".minutes h2");
const seconds = document.querySelector(".seconds h2");

const launchCountDown = () => {
  const launchDate = new Date("November 12 2023 00:00:00").getTime();
  const currentDate = new Date().getTime();

  const countDownTime = launchDate - currentDate;

  const calcSeconds = 1000;
  const calcMinutes = calcSeconds * 60;
  const calcHours = calcMinutes * 60;
  const calcDays = calcHours * 24;

  const launchDays = Math.floor(countDownTime / calcDays);
  const launchHours = Math.floor((countDownTime % calcDays) / calcHours);
  const launchMinutes = Math.floor((countDownTime % calcHours) / calcMinutes);
  const launchSeconds = Math.floor((countDownTime % calcMinutes) / calcSeconds);

  days.innerText = launchDays;
  hours.innerText = launchHours;
  minutes.innerText = launchMinutes;
  seconds.innerText = launchSeconds;
};

setInterval(launchCountDown, 1000);
