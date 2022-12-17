import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

//Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems
//i dostarczonym szablonem elementu galerii.
let markup = "";
for (const { preview, original, description } of galleryItems) {
  markup += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" >
  </a>
  </div>`;
}
gallery.innerHTML = markup;

//Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.
const showImage = (event) => {
  event.preventDefault();
  if (!event.target.src) {
    return;
  }

  //Sprawdzenie indeksu obrazka w który kliknięto
  console.log(event.target.src);
  const imageIndex = galleryItems.findIndex((image) => {
    return image.preview === event.target.src;
  });
  console.log(imageIndex);

  //Otworzenie okna modalnego po kliknięciu w element galerii
  const modal = basicLightbox.create(`
    <img 
    src="${galleryItems[imageIndex].original}" 
    alt="${galleryItems[imageIndex].description}" >
    `);
  modal.show();

  //Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy Escape
  const closeModal = (event) => {
    if (event.keyCode === 27) {
      modal.close();
      //Zrób tak, aby nasłuchiwanie klawiatury było aktywne tylko wtedy,
      //gdy otwarte jest okno modalne
      gallery.removeEventListener("keydown", closeModal);
    }
  };
  gallery.addEventListener("keydown", closeModal);
};

gallery.addEventListener("click", showImage);
