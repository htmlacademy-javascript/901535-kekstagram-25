function getRandomPositiveInteger(a, b) {
  const max = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const min = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

function checkStringLength(str, max) {
  return str.length <= max;
};

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createComments = () => {
  const randomIndex = getRandomPositiveInteger(0, 25);
  const randomMessageIndex = getRandomPositiveInteger(0, MESSAGES.length - 1);
  const randomNameIndex = getRandomPositiveInteger(0, NAMES.length - 1);
  const randomSurnameIndex = getRandomPositiveInteger(0, SURNAMES.length - 1);

  return {
    id:  randomIndex,
    avatar: "",
    message: MESSAGES[randomMessageIndex],
    neme: NAMES[randomNameIndex] + ' ' + SURNAMES[randomSurnameIndex],
  };
};

console.log(
  createComments()
);
