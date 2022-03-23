import { createKekstgram } from "./data.js";
import { postOpen } from "./window.js";

const temp = document.querySelector('#picture').content;
const tempMiniature = temp.querySelector('.picture');

const pictures = document.querySelector('.pictures');

const tempFragment = document.createDocumentFragment();

const arrayMiniature = createKekstgram();

const cteateMiniature = () => {
  arrayMiniature.forEach(({url, likes, comments}) => {
    const miniatureElement = tempMiniature.cloneNode(true);

    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    tempFragment.appendChild(miniatureElement);

    miniatureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      postOpen();
    });
  });

  pictures.appendChild(tempFragment);
};

export {arrayMiniature, cteateMiniature}
