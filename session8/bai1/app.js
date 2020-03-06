let count = 0;
const number = document.querySelector("p");

const plus = () => {
  count += 1;
  number.innerText = count;
};

const minus = () => {
  count -= 1;
  number.innerText = count;
};

const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");

buttonPlus.addEventListener("click", plus);
buttonMinus.addEventListener("click", minus);
