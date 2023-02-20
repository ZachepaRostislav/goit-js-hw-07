import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery');

function createMarkup(array) {
  return array.map(({ preview, original, description }) => {
    return `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>    
    `
  }).join('')
}

const markup = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);


const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});