import { resetEffectImage } from "./editor.js";

const body = document.querySelector('body');
const imgUpload = body.querySelector('.img-upload');
const uploadFileInput = imgUpload.querySelector('#upload-file');
const imgUploadOverlay = imgUpload.querySelector('.img-upload__overlay');

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');

const resetForm = () => {
  scaleControlValue.value = '100%';
  imgUploadPreview.style = '';

  resetEffectImage();
};

const openUploadForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  resetForm();
};

uploadFileInput.addEventListener('change', openUploadForm);
