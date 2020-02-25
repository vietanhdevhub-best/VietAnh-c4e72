function censoredString(str) {
  const nguyenAm = "ueoaiUEOAI";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (nguyenAm.includes(str[i])) {
      newStr += "*";
    } else newStr += str[i];
  }
  return newStr;
}

function getFrequencies(arr) {
  const result = arr.reduce((accumulator, currentItem) => {
    if (!accumulator[currentItem]) {
      accumulator[currentItem] = 1;
    } else {
      accumulator[currentItem]++;
    }
    return accumulator;
  }, {});
  return result;
}

function keysAndValues(obj) {
  const result = [];
  for (const item in obj) {
    result.push(item);
  }
  for (const item in obj) {
    result.push(obj[item]);
  }
  return result;
}

function khaBanh(str) {
  let newStr = "";
  newStr += str[0];
  for (let i = 1; i < str.length; i++) {
    if (
      newStr[i - 1] === newStr[i - 1].toUpperCase() &&
      newStr[i - 1] !== " "
    ) {
      newStr += str[i].toLowerCase();
    } else if (
      newStr[i - 1] === newStr[i - 1].toLowerCase() &&
      newStr[i - 1] !== " "
    ) {
      newStr += str[i].toUpperCase();
    } else if (newStr[i - 1] === " ") {
      if (newStr[i - 2] === newStr[i - 2].toUpperCase()) {
        newStr += str[i].toLowerCase();
      } else if (newStr[i - 2] === newStr[i - 2].toLowerCase()) {
        newStr += str[i].toUpperCase();
      }
    }
  }
  return newStr;
}

function mapLetters(str) {
  const arr = str.split("");
  const result = arr.reduce((accumulator, currentItem, currentIndex) => {
    if (!accumulator[currentItem]) {
      accumulator[currentItem] = [];
      accumulator[currentItem].push(currentIndex);
    } else {
      accumulator[currentItem].push(currentIndex);
    }
    return accumulator;
  }, {});
  return result;
}
function reverseObject(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    result[values[i]] = keys[i];
  }
  return result;
}
