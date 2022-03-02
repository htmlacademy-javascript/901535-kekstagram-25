function checkStringLength(str, max) {
  return str.length <= max;
};

const NAMES = [
  'Иван',
  'Александр',
  'Мария',
  'Артём',
  'Виктор',
  'Юлия',
  'Люпита',
  'Анна',
  'Анаастасия'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_COMMENT_COUNT = 25;

const makeCounter = () => {
  let currentCount = 1;

  return function () {
    return currentCount++;
  };
};

let counter = makeCounter();

const getRandomPositiveInteger = (a, b) => {
  const max = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const min = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length -1)];
};

const createComments = () => {
  return {
    id:  getRandomPositiveInteger(25, 200),
    avatar: "img/avatar-" + getRandomPositiveInteger(1, 6) + ".svg",
    message: getRandomArrayElement(MESSAGES),
    neme: getRandomArrayElement(NAMES),
  };
};

const comments = Array.from({length: SIMILAR_COMMENT_COUNT}, createComments);

const createKekstgram = () => {
  let nn

  return {
    id: "",
    url: "photo/" + nn + ".jpg",
    description: getRandomArrayElement(MESSAGES),
    likes: getRandomPositiveInteger(15, 200),
    comment: getRandomArrayElement(comments),
  }
}

const kekstgram = Array.from({length: SIMILAR_COMMENT_COUNT}, createKekstgram, (id, index) => id = index)

console.log(kekstgram);
