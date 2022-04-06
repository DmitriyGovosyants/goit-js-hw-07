import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('div.gallery');

galleryEl.addEventListener('click', onBigImgOpen);

function onBigImgOpen(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    evt.preventDefault();

    basicLightbox
        .create(`
            <img src="${evt.target.dataset.source}" alt="${evt.target.alt}">
        `)
        .show();
};

function makeGalleryMarkup() {
    const markup = galleryItems
    .map(({preview, original, description}) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
            </a>
        </div>`
    )
    .join('');

    galleryEl.innerHTML = markup;
};

makeGalleryMarkup();
