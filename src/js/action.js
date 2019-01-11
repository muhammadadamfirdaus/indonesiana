// action button
var listActionButton = $('.dashboard ul li');
listActionButton.on('mouseenter', function(){
  var hoverThis = $(this);
  listActionButton.not(hoverThis).removeClass('active');
  hoverThis.addClass('active');
}).on('mouseleave', function(){
  listActionButton.removeClass('active ');
});