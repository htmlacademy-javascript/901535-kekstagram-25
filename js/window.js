import { isEscapeKey } from "./util.js";

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const social = bigPicture.querySelector('.social');
const socialCommentCount = social.querySelector('.social__comment-count');
const bigPictureCancel = bigPicture.querySelector('.cancel');
const overlay = document.querySelector('.ovelay')

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.big-picture__preview')) {
    closeBigPicture();
  }
};

const openWin = (post) => {
  bigPicture.querySelector('.big-picture__img img').src = post.url;
  socialCommentCount.querySelector('.comments-count').textContent = post.comments.length;
  social.querySelector('.likes-count').textContent = post.likes;
  social.querySelector('.social__caption').textContent = post.description;

  socialComments.innerHTML = '';
  socialComments.appendChild(createCommentsFragment(post.comments));
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  bigPictureCancel.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onPopupEscKeydown);
  overlay.removeEventListener('click', onOverlayClick);
}

const postOpen = (post) => {
  openWin(post);

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureCancel.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onPopupEscKeydown);
  overlay.removeEventListener('click', onOverlayClick);
}

export {postOpen};
