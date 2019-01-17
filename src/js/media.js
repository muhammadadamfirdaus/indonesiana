const uploadButton = document.querySelector('.button.upload');
const createPost = document.querySelector('.create-post');
const editCoverButton = document.querySelector('.cover');
const thumbnail = document.querySelectorAll('.list li');
const mediaGallery = document.querySelector('.gallery');
const mediaUpload = document.querySelector('.button-modal.upload');

if(mediaGallery){
  // modal(mediaGallery)
  modal(mediaUpload)
} else if (createPost){
  modal(editCoverButton);
}

// select media
// const imageList = document.querySelector('.thumbnail img');
// select all
// for(let i = 0; i < thumbnail.length; i++){
//   thumbnail[i].addEventListener('click', function(e){
//     console.log('selected');
//     if(thumbnail[i].classList.contains('selected')){
//       thumbnailSelected.classList.remove('selected');
//     } else {
//       this.classList.add('selected');
//     }
//   });
// }

// select one
for(let i = 0; i < thumbnail.length; i++){
  thumbnail[i].addEventListener('click', function(e){
    e.preventDefault();
    console.log('selected');
    // console.log(this.getAttribute('data-title'));

    // change preview image by current selected image
    const imagePreview = document.querySelector('.preview img');
    const metaURL = document.querySelector('.meta-url');
    if(imagePreview){
      imagePreview.src = thumbnail[i].getElementsByTagName('img')[0].src;
      // change meta-url by current selected image
      metaURL.value = thumbnail[i].getElementsByTagName('img')[0].src;
    }
    
    // remove .selected if is not selected
    for(let i = 0; i < thumbnail.length; i++){
      thumbnail[i].classList.remove('selected');
      this.classList.add('selected');
      modal(thumbnail);
    }
  });
}
