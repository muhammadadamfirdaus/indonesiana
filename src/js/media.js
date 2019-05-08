const createPost = document.querySelector('.create-post');
const mediaGallery = document.querySelector('.gallery');

var callback;
var searchImages = window.location.href.indexOf('?');

if(searchImages > -1){
   console.log("hi");
   var modalcreatepost = document.querySelector('.modal.media.create-post');
   modalcreatepost.classList.add('active');
}

if(mediaGallery){
  var buttonUpload = '.upload';
  var modalUpload = '.create-post';
  modal(buttonUpload, modalUpload);
  var listThumbnail = '.thumbnail';
  var modalGallery = '.gallery';
  modal(listThumbnail, modalGallery);

} else if (createPost){
  var buttonUpload = '.upload';
  var modalUpload = '.create-post';
  modal(buttonUpload, modalUpload);
}

// select media
const thumbnail = document.querySelectorAll('.list li');
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
    }
  });
}
