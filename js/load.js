import { renderPosts } from './preview.js';
import { request } from './network.js';
import { showErrorReceive } from './modal.js';

let posts;

const onSuccess = (data) => {
  posts = data;
  renderPosts(data);
};

const onFail = (message) => {
  showErrorReceive(message)
};

const getData = () => {
  request(onSuccess, onFail, 'GET');
};

export { posts, getData };
