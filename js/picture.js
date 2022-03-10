import { createKekstgram } from "./data.js";

const miniature = document.querySelector('#picture');

const pictures = document.querySelector('.pictures');

const arrayMiniature = createKekstgram();

arrayMiniature.forEach((keks) => {
  const miniatureElement = miniature.cloneNode(true);
  // miniatureElement.querySelector('.picture__likes').innerHTML = keks.likes;
  pictures.appendChild(miniatureElement);
});

