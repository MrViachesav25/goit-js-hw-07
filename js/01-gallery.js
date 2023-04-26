import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

function createMarkupGallery(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
            </a>
        </li>`
    )
    .join(" ");
}

const addedMarkupGallery = createMarkupGallery(galleryItems);
galleryListEl.innerHTML = addedMarkupGallery;
galleryListEl.addEventListener("click", clickImage);

function clickImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);
  instance.show();

  galleryListEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
