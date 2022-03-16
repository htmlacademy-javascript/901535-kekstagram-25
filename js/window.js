const userWindow = document.querySelector('.big-picture');
const userWindowClose = userWindow.querySelector('.cancel');

userWindow.classList.remove('hidden');

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    userWindow.classList.add('hidden');
  }
});

userWindowClose.addEventListener('click', () => {
  userWindow.classList.add('hidden');
});
