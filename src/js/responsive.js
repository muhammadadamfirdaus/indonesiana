var isiPad = navigator.userAgent.match(/iPad/i) != null;


var menuSidebar = document.querySelector('.dashboard');
if(isiPad){
  console.log(isiPad);
  if(!menuSidebar.classList.contains('sidebar-hide')){
    menuSidebar.classList.add('sidebar-hide','ipad-tablet');
  }
}