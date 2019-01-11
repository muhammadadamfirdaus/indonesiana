// they said it's fancy parallax, I say it's mainstream... So, why you applied for that?
if($('#detail').length){
  $('.image img').each(function() {
    var off = $(this).offset().top
    $(this).data('orig-offset', off);
  });

  $(window).on('scroll', function(){
    var scrollTop = getCurrentScroll();

    $('.image img').each(function(){
      var off = $(this).data('orig-offset');
      
      if (scrollTop >= off) {
        var translate =  (scrollTop - off) / $(window).height() * 100;
        console.log(translate);
        $(this).css({
          transform: 'translate3d(0,' + translate +'%, 0)'
        });
      }
    });
  });

  // comment
  var comment = $('#comment');
  var commentBox = $('#comment textarea');
  var commentClass = $('form .username');
  var commentUsername = $('form .username h2');
  // make sure comment box is default state
  commentUsername.html('Sampaikan sesuatu...');
  commentBox.on('focus', function(){
    comment.addClass('active');
    // change to commentator name when typing...
    commentUsername.html(commentUsername.attr('data-user'));
    if($('.typing').length){
      commentClass.removeClass('typing');
    } else {
      commentClass.addClass('typing');
    }
  }).on('blur', function(){
    // reset to original state
    commentUsername.html('Sampaikan sesuatu...');
    commentClass.removeClass('typing');
    comment.removeClass('active');
  });
}