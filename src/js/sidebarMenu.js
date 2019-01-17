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

// show submenu if user hover on sub icon
let sidebarMenuList = $('.sidebar .wrapper > li');
let subMenu = $('.sub ul');
sidebarMenuList.on('mouseenter', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  sidebarMenuList.removeClass('active');
  $(this).addClass('active');

  // hide submenu if user outside sub area
  sidebarMenuList.on('mouseleave', function(e){
    if($(e.target).closest(subMenu).length){
      sidebarMenuList.removeClass('active');
    }
  });
});

// destroy sub wherever user outside sub area
$(window).on('click', function(e){
  e.stopImmediatePropagation();
  if($(e.target).closest(subMenu)){
    sidebarMenuList.removeClass('active');
  }
});