const random = function (min, max) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return console.log("Не правильные даные")
};

const findLongestWord = function (str, max) {
  if (str.length <= max) {
    return true;
  }
  return false;
};
