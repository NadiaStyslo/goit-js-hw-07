import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery")

const markGallery = createGalleryItemsMarkup(galleryItems);
console.log(markGallery)
container.insertAdjacentHTML ("beforeend", markGallery)
function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) =>
    `<li class="galery__item"> 
        <a class = "image__link" href = "${original}" 
    <img class = "gallery__image" src= "${preview}" 
    data-source ="${original}"
    alt = "${description}" />
    </a>
    </li>`).join('');
}
//console.log(galleryItems);

//const container = document.querySelector(".gallery")
//console.log(galleryItems)
//const markGallery = galleryItems.map(({ preview, original, description }) =>
  //  `<li class = "gallery_item">
//<a class ="imade_link" href ="${original}"
//< img class = "image_list" src = "${preview}"
//data-source ="${original}"
//alt = "${description}"/>
//</a></li>`)

//container.insertAdjacentHTML('beforeend', markGallery.join(''));
//container.addEventListener('click', onClick);
//function onClick(evt) {
    
//}

//console.log(markGallery)