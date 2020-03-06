const timeInput = document.querySelector("input");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const text = document.querySelector("p");
let t;
const startCount = () => {
  let time = timeInput.value;
  if (time <= 0) {
    clearInterval(t);
    text.innerText = "Time's up";
  } else {
    text.innerText = time;
    time = time - 1;
  }
  t = setInterval(() => {
    if (time <= 0) {
      clearInterval(t);
      text.innerText = "Time's up";
    } else {
      text.innerText = time;
      time = time - 1;
    }
  }, 1000);
};
const pause = () => {
  clearInterval(t);
  text.innerText = "paused";
};
startButton.addEventListener("click", startCount);
pauseButton.addEventListener("click", pause);
