// const createPost = document.querySelector('.create-post');
// const editCoverButton = document.querySelector('.cover');

// if(createPost){
//   console.log('create post');
//   window.addEventListener('click', function(e){
//     // check if user click upload button
//     if(e.target.closest('.cover')){
//       console.log('di dalam');
//       if(mediaUpload.classList.contains('active')){
//         mediaUpload.classList.remove('active');
//       } else {
//         mediaUpload.classList.add('active');
//       }
//     } else if(e.target.closest('.modal.media')){
//       console.log('di dalam');
//       // close when user hit button close
//       if(e.target.closest('.button.close')){
//         mediaUpload.classList.remove('active');
//       } else {
//         // but do nothing if click inside
//         return;
//       }
//     } else {
//       // destroy everything when user out of the box...
//       console.log('di luar');
//       mediaUpload.classList.remove('active');
//     }
//   });
// }

// if(createPost){
//   modal(editCoverButton);
// }

const imageReady = document.querySelector('.image');
const previewImage = document.querySelector('#preview-image');
const coverButton = document.querySelector('.cover.upload');

if(imageReady){
  console.log(imageReady, previewImage);
  previewImage.prepend(coverButton)
}

