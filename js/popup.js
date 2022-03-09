import { createKekstgram } from "./data.js";

const userDialog = document.querySelector('.big-picture');
userDialog.classList.remove('hidden');

const miniature = document.querySelector('#picture');

const newKekstgram = createKekstgram();
