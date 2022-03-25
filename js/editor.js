const Effect = {
  chrome: { min: 0, max: 1, step: 0.1, style: (value) => `grayscale(${value})` },
  sepia: { min: 0, max: 1, step: 0.1, style: (value) => `sepia(${value})` },
  marvin: { min: 0, max: 100, step: 1, style: (value) => `invert(${value}%)` },
  phobos: { min: 0, max: 3, step: 0.1, style: (value) => `blur(${value}px)` },
  heat: { min: 1, max: 3, step: 0.1, style: (value) => `brightness(${value})` },
  none: { min: 0, max: 100, step: 1, style: () => 'none' },
};

const effectLevel = document.querySelector('.effect-level');
const sliderValue = effectLevel.querySelector('.effect-level__value');

const imgUploadPreview = document.querySelector('.img-upload__preview img');

const imgEffect = {
  effect: 'none',
  value: 100,
}

const resetEffectImage = () => {
  imgEffect.effect = 'none';
  imgEffect.value = 100;

  updateEffectImage();
};

const updateEffectImage = () => {
  sliderValue.value = imgEffect.value;
  imgUploadPreview.getElementsByClassName.filter = Effect[imgEffect.effect].style(imgEffect.value);

  imgUploadPreview.classList.forEach((item) => {
    if (item.includes('effects__preview--')) {
      imgUploadPreview.classList.remove(item);
    }
  });

  imgUploadPreview.classList.add('effects__preview--${imgEffect.effct}');

  if (imgEffect.effect == 'none') {
    effectLevel.classList.add('visually-hidden');
  } else {
    effectLevel.classList.remove('visually-hidden');
  }
};

export { resetEffectImage };
