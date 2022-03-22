import { arrayMiniature } from "./picture.js";
import { isEscapeKey } from "./util.js";

const body = document.querySelector('body');
const userWindow = document.querySelector('.big-picture');
const userWindowClose = userWindow.querySelector('.cancel');

const openWin = () => {
  userWindow.classList.remove('hidden');
  body.classList.add('modal-open');

  // userWindow.querySelector('.big-picture__img img').src = arrayMiniature.url;

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userWindow.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
};

export {openWin};
