import { arrayMiniature } from "./picture.js";

const body = document.querySelector('body');
const userWindow = document.querySelector('.big-picture');
const userWindowClose = userWindow.querySelector('.cancel');

userWindow.classList.remove('hidden');
body.classList.add('modal-open');

userWindow.querySelector('.big-picture img').src = arrayMiniature.url;

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    userWindow.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

userWindowClose.addEventListener('click', () => {
  userWindow.classList.add('hidden');
  body.classList.remove('modal-open');
});
