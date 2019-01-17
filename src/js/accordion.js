// accordion
let accordion = $('.accordion');
let accordionButton = accordion.find('.toggle');
accordionButton.on('click', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  console.log('closing accordion');
  if( $(this).data('status') == 'clicked' ) {
    $(this).data('status','not_clicked').closest(accordion).removeClass('accordion-closed');
  } else {
    $(this).data('status','clicked').closest(accordion).addClass('accordion-closed');
  }
});