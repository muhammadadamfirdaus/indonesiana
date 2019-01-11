// tab
$('.tabs li').on('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  var tab_id = $(this).attr('data-tab');

  $('.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
  history.pushState(null, null, "#"+tab_id);
});