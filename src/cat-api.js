import { refs } from '.';

export function fetchBreeds() {
  const options = {
    headers: {
      'x-api-key':
        'live_9NQ1iBJZ1wBNuHv00WL0mialjmLWdOpxplfwfATgN4Rrux61anAIs4mZrhH41v0d',
    },
  };

  const url = 'https://api.thecatapi.com/v1/breeds';

  return fetch(url, options)
    .then(data => {
      if (!data.ok) {
        console.log('data not ok');
        refs.loader.hidden = true;
        refs.error.hidden = false;
        return;
      }
      return data.json();
    })
    .then(data => {
      return data;
    });
}

export function fetchCatByBreed(breedId) {
  const options = {
    headers: {
      'x-api-key':
        'live_9NQ1iBJZ1wBNuHv00WL0mialjmLWdOpxplfwfATgN4Rrux61anAIs4mZrhH41v0d',
    },
  };

  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, options)
    .then(cat => cat.json())
    .then(cat => {
      return cat;
    });
}
