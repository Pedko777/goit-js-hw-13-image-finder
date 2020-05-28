import './styles.css';
import api from './js/apiService';
import card from './template/cardTemplate.hbs';

const form = document.forms.namedItem('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.addEventListener('click', () => {
  api.getImage().then(res => createCardItem(res));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const value = form.elements.query.value;
  api.query = value;
  gallery.innerHTML = '';
  api.resetPage();
  api.getImage().then(res => createCardItem(res));
  form.reset();
});

const createCardItem = array => {
  const cardItemList = array.reduce((acc, item) => {
    return (acc += card(item));
  }, '');
  gallery.insertAdjacentHTML('beforeend', cardItemList);
};
