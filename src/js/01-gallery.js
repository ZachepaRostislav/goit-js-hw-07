import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery');

function createImageGalleryMarkup(array) {
  return array.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  }).join('')
};

const markup = createImageGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);



gallery.addEventListener('click', (event) => {
  event.preventDefault()

  const imgEl = event.target.dataset.source
  if (!imgEl) {
    return
  }
  const instance = basicLightbox.create(`
      <img
            class="gallery__image"
            src="${event.target.dataset.source}"
             width="800" height="600">
  `)
  instance.show()

  gallery.addEventListener("keydown", event => {
    if (event.code !== 'Escape') {
      return
    }
    instance.close()
  });
})



