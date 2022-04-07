import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('ul.gallery');
makeGalleryMarkup();
var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, disableScroll: false});

function makeGalleryMarkup() {
    const markup = galleryItems
    .map(({preview, original, description}) => 
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
        </a>`
    )
    .join('');

    galleryEl.innerHTML = markup;
};

