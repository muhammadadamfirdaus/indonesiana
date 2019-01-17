
function view(){
  const viewGrid = document.querySelector('.icon.view-grid');
  const viewList = document.querySelector('.icon.view-list');
  const parent = closestParent(viewGrid, '.dashboard');

  // check if icon views are exists
  if(viewGrid){
    // Get the parent with the view-grid & view-list class
    if(viewList.classList.contains('active')) {
      parent.classList.remove('view-grid');
      parent.classList.add('view-list');
    } else {
      parent.classList.remove('view-list');
      parent.classList.add('view-grid');
    }
  }
}