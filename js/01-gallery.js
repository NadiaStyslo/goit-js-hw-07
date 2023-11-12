import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery")
//console.log(galleryItems)
const markGallery = galleryItems.map(({ preview, original, description }) =>
   `<li class="galery__item"> 
        <a class = "image__link" href = "${original}" >
    <img class = "gallery__image" src= "${preview}" 
    data-source ="${original}"
    alt = "${description}" />
    </a>
    </li>`).join('');
container.insertAdjacentHTML('beforeend', markGallery);
container.addEventListener('click', onClick);
function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("galery__image")) {
        
        return
        console.log(evt.curentTarget)
    }
}
container.addEventListener('click', onModal)
function onModal(evt){
const instance = basicLightbox.create(
        `<img src = "${evt.target.dataset.source}">`
    )
        instance.show()
        container.addEventListener('keydown', (evt)=>{
    if( evt.code === "Escape")
    return instance.close();
})
}
