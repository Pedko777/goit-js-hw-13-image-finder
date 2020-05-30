import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function openModalImg(e) {
  if (e.target.nodeName !== 'IMG') return;
  
  const largeImg = e.target.src;

  const instance = basicLightbox.create(
    `<div><img src='${largeImg}' class='largeImg'></div>`,
  );
  
  instance.show();
  
  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    (e.code === 'Escape') && instance.close();

    window.removeEventListener('keydown', closeModalHandler);
    closeBtn.removeEventListener('click', closeModalHandler);
  }
}