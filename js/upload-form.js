import { getPhotoSrc, isEscEvent } from "./util.js"
import { createSlider, destroySlider, resetEffectImage, onEffectsChange } from "./editor.js";
import { zoomIn, zoonOut } from "./zoom.js";
import { validationText } from "./validation.js";
import { request } from "./network.js";
import { showErrorLoad, showSuccessLoad } from "./modal.js";

const body = document.querySelector('body');
const imgUpload = body.querySelector('.img-upload');
const uploadFileInput = imgUpload.querySelector('#upload-file');
const imgUploadOverlay = imgUpload.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUpload.querySelector('.img-upload__cancel');

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgEffectsPreviews = imgUpload.querySelectorAll('.effects__preview');
const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');

const effects = document.querySelector('.img-upload__effects');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const resetForm = () => {
  scaleControlValue.value = '100%';
  imgUploadPreview.style = '';

  resetEffectImage();
};

const renderPhotoPreview = (src) => {
  imgUploadPreview.src = src;

  imgEffectsPreviews.forEach(element => {
    element.style.backgroundImage = `url(${src})`;
  });
};

const loadPreview = () => {
  getPhotoSrc(uploadFileInput)
    .then((data) => renderPhotoPreview(data))
    .then(() => openUploadForm())
    .catch((error) => showErrorLoad(error));
};

const openUploadForm = () => {
  resetForm();
  createSlider();

  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
  imgUploadCancel.addEventListener('click', closeUploadForm);
  scaleControlSmaller.addEventListener('click', zoomIn);
  scaleControlBigger.addEventListener('click', zoonOut);
  effects.addEventListener('change', onEffectsChange);
  textHashtags.addEventListener('input', onHashtagsInput);
  textDescription.addEventListener('input', onDescriptionInput);
  imgUpload.addEventListener('submit', onImgUploadFormSubmit);
};

const closeUploadForm = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFileInput.value = '';
  destroySlider();

  document.removeEventListener('keydown', onPopupEscKeydown);
  imgUploadCancel.removeEventListener('click', closeUploadForm);
  scaleControlSmaller.removeEventListener('cick', zoomIn);
  scaleControlBigger.removeEventListener('click', zoonOut);
  textHashtags.removeEventListener('input', onHashtagsInput);
  textDescription.removeEventListener('input', onDescriptionInput);
  imgUpload.removeEventListener('submit', onImgUploadFormSubmit);
};

const onHashtagsInput = () => validationText(textHashtags, 'hashtag');
const onDescriptionInput = () => validationText(textDescription, 'description');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();

    if (!document.activeElement.matches('.text__hashtags') && !document.activeElement.matches('.text__description')) {
      closeUploadForm();
    }
  }
};

const onSuccess = () => {
  closeUploadForm();
  showSuccessLoad();
};

const onImgUploadFormSubmit = (evt) => {
  evt.preventDefault();

  request(onSuccess, showErrorLoad, 'POST', new FormData(evt.target));
};

uploadFileInput.addEventListener('change', loadPreview);
