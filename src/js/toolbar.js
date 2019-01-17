// toolbar
const toolbarProfileExpand = document.querySelector('.profile-expand');
const toolbarProfile = document.querySelector('.toolbar .profile');

// show profile detail whenever user mouseover their name and photo
toolbarProfile.addEventListener('mouseenter', function(e){
  e.stopImmediatePropagation();
  toolbarProfileExpand.classList.add('active');
});

// hide profile detail whenever user mouseleave profile detail area
toolbarProfileExpand.addEventListener('mouseleave', function(e){
  e.stopImmediatePropagation();
  toolbarProfileExpand.classList.remove('active');
  console.log('profile expand outside area');
});

// hide profile detail wherever user click outside area
window.addEventListener('click', function(e){
  e.stopImmediatePropagation();
  if(e.target.closest('.profile-expand')){
    return
  } else {
    toolbarProfileExpand.classList.remove('active');
  }
});