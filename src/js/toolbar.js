
// toolbar
// let toolbarProfileExpand = $('.toolbar .profile-expand');
// let toolbarUser = $('.toolbar .user, .toolbar .name');
// toolbarUser.on('mouseenter', function(e){
//   e.preventDefault();
//   e.stopImmediatePropagation();
//   toolbarProfileExpand.addClass('active');
//   toolbarProfileExpand.on('mouseleave', function(e){
//     if($(e.target).closest(toolbarProfileExpand).length){
//       toolbarProfileExpand.removeClass('active');
//     }
//   });
// });
const toolbarProfileExpand = document.querySelector('.toolbar .profile-expand');
const toolbarUser = document.querySelector('.toolbar .user, .toolbar .name');

toolbarUser.addEventListener('mouseenter', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  toolbarProfileExpand.classList.add('active');
  toolbarProfileExpand.addEventListener('mouseleave', function(e){
    if(e.target.closest('.profile-expand')){
      toolbarProfileExpand.classList.remove('active');
    }
  });
});