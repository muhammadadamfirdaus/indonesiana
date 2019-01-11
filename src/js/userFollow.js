$(document).on('click', '.button.network', function(e){
  e.preventDefault();
  if( $(this).data('follow') == 'follow' ) {
    $(this).data('follow','followed');
    $(this).removeClass('follow').addClass('followed').attr('data-follow', 'followed').html('Followed');
  } else {
    $(this).data('follow','follow');
    $(this).addClass('follow').removeClass('followed').attr('data-follow', 'follow').html('Follow');
  }
});