import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

//Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems
//i dostarczonym szablonem elementu galerii.
let markup = "";
for (const { preview, original, description } of galleryItems) {
  markup += `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" >
    </a>
  `;
}
gallery.innerHTML = markup;

//Inicjalizacja biblioteki po utworzeniu elementów galerii
//i dodaniu ich do div.gallery
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
