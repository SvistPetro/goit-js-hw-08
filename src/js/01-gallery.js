// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const ulEl = document.querySelector('.gallery');
const galleryElements = galleryItems.map(
  ({ preview, original, description }) =>
    `<a href="${original}"><img class="gallery__image" src="${preview}" alt="" title="${description}"/></a>`
);
ulEl.insertAdjacentHTML('beforeend', galleryElements.join(''));

const lightbox = new SimpleLightbox('.gallery a');
