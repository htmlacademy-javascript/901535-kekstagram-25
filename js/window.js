import { createKekstgram } from "./data.js";

const userWindow = document.querySelector('.big-picture');
userWindow.classList.remove('hidden');

const arrayWindow = createKekstgram();

// arrayWindow.forEach((keks) => {
//   const windowElement = userWindow.cloneNode(true);
//   // windowElement.querySelector('.big-picture__img')
//   userWindow.appendChild(windowElement);
// });
