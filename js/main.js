import { showErrorReceive } from './modal.js';
import { request } from './network.js';
import { renderPosts } from './preview.js';
import './upload-form.js'

request(renderPosts, showErrorReceive, 'GET');
