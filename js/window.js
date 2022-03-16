const body = document.querySelector('body');
const userWindow = document.querySelector('.big-picture');
const userWindowClose = userWindow.querySelector('.cancel');

const openWin = () =>{
  userWindow.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      userWindow.classList.add('hidden');
    }
  });

  userWindowClose.addEventListener('click', () => {
    userWindow.classList.add('hidden');
  });
};