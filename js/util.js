function checkStringLength(str, max) {
  return str.length <= max;
};

const getRandomPositiveInteger = (a, b) => {
  const max = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const min = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length -1)];
};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

export {getRandomArrayElement, getRandomPositiveInteger, isEscapeKey};
