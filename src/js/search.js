// search
let search = document.querySelector('.search');

if(search){
  console.log(search);

  let buttonSearch = document.querySelector('.button-search');
  let searchContainer = document.querySelector('.search-container');

  buttonSearch.addEventListener('click', function(e){
    if(searchContainer.classList.contains == 'active'){
      searchContainer.classList.remove('active');
    } else {
      searchContainer.classList.add('active');
    }
  });
    
  let closeButtonSearch = document.querySelector('.search-container .close.button');
  closeButtonSearch.addEventListener('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    searchContainer.classList.remove('active'); 
  });
}
