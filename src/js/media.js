const uploadButton = document.querySelector('.button.upload');
const mediaUpload = document.querySelector('.modal.media');
const createPost = document.querySelector('.create-post');
const editCoverButton = document.querySelector('.cover');
// check if upload button exists
// if(uploadButton){
//   console.log('media');
//   // upload button on click
//   window.addEventListener('click', function(e){
//     // check if user click upload button
//     if(e.target.closest('.button.upload')){
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

if(uploadButton){
  modal(uploadButton);
} else if (createPost){
  modal(editCoverButton);
}