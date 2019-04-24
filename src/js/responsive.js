// var isiPad = navigator.userAgent.match(/iPad/i) != null;

var userAgent = navigator.userAgent.toLowerCase();
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
var menuSidebar = document.querySelector('.dashboard');
var w = window.innerWidth;
if(isTablet || w < 768){
  console.log(isTablet);
  if(!menuSidebar.classList.contains('sidebar-hide')){
    menuSidebar.classList.add('sidebar-hide','ipad-tablet');
  }
}