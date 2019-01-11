const uploadButton = document.querySelector('.button.upload');
const mediaUpload = document.querySelector('.modal.media');
const createPost = document.querySelector('.create-post');
const editCoverButton = document.querySelector('.cover');

if(uploadButton){
  modal(uploadButton);
} else if (createPost){
  modal(editCoverButton);
}

// select media
const thumbnail = document.querySelectorAll('.modal.media li');
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

const imagePreview = document.querySelector('.preview img');
const metaURL = document.querySelector('.meta-url');

// select one
for(let i = 0; i < thumbnail.length; i++){
  thumbnail[i].addEventListener('click', function(e){
    e.preventDefault();
    console.log('selected');
    // console.log(this.getAttribute('data-title'));

    // change preview image by current selected image
    imagePreview.src = thumbnail[i].getElementsByTagName('img')[0].src;
    // change meta-url by current selected image
    metaURL.value = thumbnail[i].getElementsByTagName('img')[0].src;

    // remove .selected if is not selected
    for(let i = 0; i < thumbnail.length; i++){
      thumbnail[i].classList.remove('selected');
      this.classList.add('selected');
    }
  });
}