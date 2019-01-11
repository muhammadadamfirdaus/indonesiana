// sidebar toggle
let sidebarExpander = $('.sidebar').find('.switch');
sidebarExpander.off('click').on('click', function(e){
  // e.preventDefault();
  e.stopPropagation();
  let sidebar = $('nav.sidebar');
  if( $(this).data('status') == 'clicked' ) {
    $(this).data('status','not_clicked').closest('.dashboard').removeClass('sidebar-hide');
  } else {
    $(this).data('status','clicked').closest('.dashboard').addClass('sidebar-hide');
  }
});

// sidebar submenu
// let sidebarMenuList = $('.sidebar .wrapper > li');
// sidebarMenuList.on('mouseenter', function(e){
//   e.preventDefault();
//   e.stopImmediatePropagation();
//   sidebarMenuList.removeClass('active');
//   $(this).addClass('active');
// });

let sidebarMenuList = $('.sidebar .wrapper > li');
let subMenu = $('.sidebar .sub ul');
sidebarMenuList.on('mouseenter', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  sidebarMenuList.removeClass('active');
  $(this).addClass('active');
  sidebarMenuList.on('mouseleave', function(e){
    if($(e.target).closest(subMenu).length){
      sidebarMenuList.removeClass('active');
    }
  });
});