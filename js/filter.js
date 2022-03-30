import { posts as generatedPosts } from "./data.js";
import { posts as receivedPosts } from "./load.js";
import { debounce } from "./util.js";

const filter = document.querySelector('.img-filters');
const filterForm = filter.querySelector('.img-filters__form');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');

let posts;

const removeActiveFilter = () => {
  filterButtons.forEach((btn) => {
    btn.classList.remove('img-filters__button--active');
  });
};

const rerender = debounce((id) =>{
  let postsCurrent = posts;
});

const onFilterClick = (evt) => {
  const target = evt.target;
  const filterBtnActive = filterForm.querySelector('.img-filters__button--active');

  if (!posts) {
    posts = receivedPosts || generatedPosts;
  };

  if (target.classList.contains('img-filters__button')) {
    if (target.id !== filterBtnActive.id || target.id === 'filter-random') {
      if (target.id !== filterBtnActive.id) {
        removeActiveFilter();
        target.classList.add('img-filters__button--active');
      };
    }
  }
};

filterForm.addEventListener('click', onFilterClick);
