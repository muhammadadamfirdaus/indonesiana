let container = $('.container');
let popup = $('.popup');
// tooltip
var tooltip = $('.tooltip');
// grab the title
tooltip.each(function(){
  $(this).data('title', $(this).attr('title'));
  $(this).removeAttr('title');
});

// put title on tooltip
tooltip.on('mouseenter', function(e){
  e.stopImmediatePropagation();
  $(this).after('<div class="tooltip-content">' + $(this).data('title') + '</div>');
  var tooltipContent = tooltip.find('.tooltip-content');
  var tooltipContentThis = $(this).find(tooltipContent);
  tooltipContent.not(tooltipContentThis).remove();
});

tooltip.on('mouseleave', function(){
  $('.tooltip-content').remove();
});