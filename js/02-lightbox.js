import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

function createMarkupGallery(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}"  alt="${item.description}"/>
            </a>
        </li>`
    )
    .join("");
}
const addedMarkupGallery = createMarkupGallery(galleryItems);
galleryListEl.innerHTML = addedMarkupGallery;
const options = {
    captionsData: "alt",
    captionDelay: 250,
  };

const lightbox = new SimpleLightbox(".gallery a", options);

