// buttonNavigation navigation
const buttonNavigation = document.querySelectorAll('nav li a.button');
const buttonNavigationActive = document.querySelectorAll('nav li a.button.active');

// find class button on navigation
for(let i = 0; i < buttonNavigation.length; i++){
  buttonNavigation[i].addEventListener('click', function(e){
    e.preventDefault();
    // let this button active then hide the others
    for(let i = 0; i < buttonNavigationActive.length; i++){
      buttonNavigation[i].classList.remove('active');
      this.classList.add('active');
    }
    view();
  });

}