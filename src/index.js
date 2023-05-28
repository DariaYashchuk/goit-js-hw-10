import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

export const refs = {
  select: document.querySelector('.breed-select'),
  value: document.querySelector('option'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),

  catCard: document.querySelector('.cat-info'),
};
refs.select.hidden = true;
refs.error.hidden = true;

fetchBreeds().then(namesMarkup);

refs.select.addEventListener('change', event => {
  refs.loader.hidden = false;
  clearContainer();

  fetchCatByBreed(event.target.value).then(createCatCardInfoMarkup);
});

function namesMarkup(data) {
  refs.select.insertAdjacentHTML('beforeend', catNames(data));
  refs.select.hidden = false;
  refs.loader.hidden = true;
}
function createCatCardInfoMarkup(data) {
  refs.catCard.insertAdjacentHTML('beforeend', createCatCardInfo(...data));
  refs.loader.hidden = true;
}

function clearContainer() {
  refs.catCard.innerHTML = '';
}

function catNames(data) {
  return data
    .map(data => {
      return `
     <option value="${data.id}">${data.name}</option>
    `;
    })
    .join('');
}

function createCatCardInfo(data) {
  console.log(data);
  return `
     <div class = "cat-info">
        <img
            src="${data.url}"
            alt="${data.breeds[0].name}"
            width="300px"
        />
        <div class = "main-info">
       <h1>${data.breeds[0].name}</h1>
        <p><span>Description: </span>${data.breeds[0].description}</p>
        <p><span>Temperament: </span>${data.breeds[0].temperament}</p>
    </div>
    </div>
    `;
}
