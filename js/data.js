import { getRandomArrayElement, getRandomPositiveInteger } from './util.js';

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

// const createComments = () => {
//   return {
//     id:  getRandomPositiveInteger(25, 200),
//     avatar: "img/avatar-" + getRandomPositiveInteger(1, 6) + ".svg",
//     message: getRandomArrayElement(MESSAGES),
//     neme: getRandomArrayElement(NAMES),
//   };
// };

// const comments = Array.from({length: SIMILAR_COMMENT_COUNT}, createComments);

let comments = []

const createComments = () => {
  for (let i = SIMILAR_COMMENT_COUNT + 2; i < 2 * (SIMILAR_COMMENT_COUNT + 2); i++) {
    comments.push({
      id:  i,
      avatar: "img/avatar-" + getRandomPositiveInteger(1, 6) + ".svg",
      message: getRandomArrayElement(MESSAGES),
      neme: getRandomArrayElement(NAMES),
    })
  }
}

createComments()

// const createKekstgram = () => {
//   let i

//   return {
//     id: i,
//     url: "photo/" + i + ".jpg",
//     description: getRandomArrayElement(MESSAGES),
//     likes: getRandomPositiveInteger(15, 200),
//     comment: getRandomArrayElement(comments),
//   }
// }

// const kekstgram = Array.from({length: SIMILAR_COMMENT_COUNT}, createKekstgram, (v, i) => i++)

let kekstgram = []

const createKekstgram = () => {
  for (let i = 1; i < SIMILAR_COMMENT_COUNT + 1; i++) {
    kekstgram.push({
      id: i,
      url: "photo/" + i + ".jpg",
      description: getRandomArrayElement(MESSAGES),
      likes: getRandomPositiveInteger(15, 200),
      comment: getRandomArrayElement(comments),
    })
  }
  return kekstgram;
}

export {createKekstgram};
