import { createKekstgram } from "./data.js";
import { postOpen } from "./window.js";

const tempMiniature = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const cteateMiniature = (post) => {
  const miniatureElement = tempMiniature.cloneNode(true);

  miniatureElement.querySelector('.picture__img').src = post.url;
  miniatureElement.querySelector('.picture__likes').textContent = post.likes;
  miniatureElement.querySelector('.picture__comments').textContent = post.comments.length;

  miniatureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    postOpen(post);
  });

  return miniatureElement;
};

const renderPosts = () => {
  const tempFragment = document.createDocumentFragment();

  createKekstgram.forEach((post) => {
    tempFragment.appendChild(cteateMiniature(post));
  });

  pictures.appendChild(tempFragment);
};

export { renderPosts };
