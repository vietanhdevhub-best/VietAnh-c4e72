// exercise1
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise is da best");
  }, 5000);
});

prom.then((response) => {
  console.log(response);
});

const test = async () => {
  const response = await prom;
  console.log(response);
};

test();

// exercise2
const getRandom = () => {
  const randomNumber = Math.floor(Math.random() * 11);
  return randomNumber;
};
const x = getRandom();
if (x < 0) {
  console.log("Failed: the number is smaller than 0");
} else if (x > 10) {
  console.log("Failed: the number is bigger than 10");
} else {
  console.log("Passed, bravo");
}

// exercise3
const getRandomInRange = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};
const x = getRandomInRange(4, 16);
if (x < 4) {
  console.log("Failed: the number is smaller than 4");
} else if (x > 16) {
  console.log("Failed: the number is bigger than 16");
} else {
  console.log("Passed, bravo");
}

//exercise4
const getRange = (x1, y1, x2, y2) => {
  const result = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  return result;
};
const d = getRange(3, 10, 0, 6);
if (d !== 5) {
  console.log("Failed: the calculation is wrong");
} else {
  console.log("Passed, bravo");
}

// exercise5
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

const fetchData = async () => {
  const { data } = await axios.get("http://quotes.rest/qod.json");
  const { quote, author } = data.contents.quotes[0];
  h1.innerText = quote;
  p.innerText = author;
};
fetchData();
