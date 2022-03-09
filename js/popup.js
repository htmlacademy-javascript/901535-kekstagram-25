import { createKekstgram } from "./data.js";

const miniature = document.querySelector('#picture');

const arrayKekstgram = createKekstgram();

arrayKekstgram.forEach((keks) => {
  const miniatureElement = miniature.cloneNode(true);
});

console.log(miniature);
