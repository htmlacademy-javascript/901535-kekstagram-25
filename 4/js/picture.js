import { createKekstgram } from "./data.js";

const miniature = document.querySelector('#picture');

const pictures = document.querySelector('.pictures');

const arrayMiniature = createKekstgram();

arrayMiniature.forEach((keks) => {
  const miniatureElement = miniature.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = keks.url;
  pictures.appendChild(miniatureElement);
});

