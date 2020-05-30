import './styles.css';
import api from './js/apiService';
import card from './template/cardTemplate.hbs';
import openModalImg from './js/modalImg.js'

const form = document.forms.namedItem('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


loadMoreBtn.addEventListener('click', () => {
  api.getImage().then(res => createCardItem(res));
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
});


form.addEventListener('submit', e => {
  e.preventDefault();
  const value = form.elements.query.value;
  api.query = value;
  gallery.innerHTML = '';
  api.resetPage();
  api.getImage().then(res => createCardItem(res));
  form.reset();
  loadMoreBtn.style.display = 'block';
});

const createCardItem = array => {
  const cardItemList = array.reduce((acc, item) => {
    return (acc += card(item));
  }, '');
  gallery.insertAdjacentHTML('beforeend', cardItemList);
};

gallery.addEventListener('click', openModalImg);

