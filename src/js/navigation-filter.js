// begin sort
// active article
function published(a, b){
  var statusArticle = $(a).attr('data-status') < $(b).attr('data-status');
  if(statusArticle !== 0){
    return statusArticle
  }
  newest();
}

// draft article
function draft(a, b){
  return ($(a).attr('data-status')) > ($(b).attr('data-status'));    
}

// ascending sort
function asc_sort(a, b){
  return ($(a).attr('data-title')) > ($(b).attr('data-title'));    
}

// descending sort
function des_sort(a, b){
  return ($(a).attr('data-title')) < ($(b).attr('data-title'));    
}

// newest
function newest(a, b){
  return new Date($(a).attr('data-time')) < new Date($(b).attr('data-time'));
}

// oldest
function oldest(a, b){
  return new Date($(a).attr('data-time')) > new Date($(b).attr('data-time'));
}

$('a.published').on('click', function(){
  $('ul.list li').sort(published).appendTo('.list');
  console.log('artikel tayang');
});
$('a.draft').on('click', function(){
  $('ul.list li').sort(draft).appendTo('.list');
  console.log('draft');
});

$('a.ascending').on('click', function(){
  $('ul.list li').sort(asc_sort).appendTo('.list');
  console.log('a ke z');
});

$('a.descending').on('click', function(){
  $('ul.list li').sort(des_sort).appendTo('.list');
  console.log('z ke a');
});

$('a.newest').on('click', function(){
  $('ul.list li').sort(newest).appendTo('.list');
  console.log('terbaru');
});

$('a.oldest').on('click', function(){
  $('ul.list li').sort(oldest).appendTo('.list');
  console.log('terlama');
});
// end sort

// filter list article
function filterListArticle(header, list){
  jQuery.expr[':'].Contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
  };
  // var listArticleForm = $('form#filter');
  var listArticleInput = $('form#filter input');

  // listArticleForm.before(listArticleInput).appendTo(header);
  console.log(header);
  var defaultPlaceholder = ('Cari berdasarkan judul');
  listArticleInput.val(defaultPlaceholder);
  listArticleInput.on('change', function(){
    var filter = $(this).val();
    if(filter){
      $(list).find('li a:not(:Contains('+filter+'))').closest('li').hide();
      $(list).find('li a:Contains('+filter+')').closest('li').show();
    } else {
      $(list).find('li').show();
    }
  }).on('keyup', function(e){
    e.stopPropagation();
    $(this).change();
  }).on('focus', function(){
    console.log('focus');
    if($(this).val()){
      listArticleInput.val('');
    }
  }).on('blur', function(){
    console.log('blur');
    $(list).find('li').show();
    if($(this).val() == ''){
      listArticleInput.val(defaultPlaceholder);
    } else if($(this).val()){
      listArticleInput.val(defaultPlaceholder);
    }
  });
}

$(window).on('load', function(){
  filterListArticle($('#filter-article'), $('#list'));
});