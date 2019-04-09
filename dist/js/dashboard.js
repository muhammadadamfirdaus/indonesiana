// get current scroll
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function get(url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
      if(xhr.status == 200){
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.statusText);
      }
    }
    xhr.onerror = function(){
      reject(xhr.statusText);
    }
    xhr.send();
  });
}
// accordion
let accordion = $('.accordion');
let accordionButton = accordion.find('.toggle');
accordionButton.on('click', function(e){
  // e.preventDefault();
  e.stopImmediatePropagation();
  console.log('closing accordion');
  if( $(this).data('status') == 'clicked' ) {
    $(this).data('status','not_clicked').closest(accordion).removeClass('accordion-closed');
  } else {
    $(this).data('status','clicked').closest(accordion).addClass('accordion-closed');
  }
});
// action button
var listActionButton = $('.dashboard ul li');
listActionButton.on('mouseenter', function(){
  var hoverThis = $(this);
  listActionButton.not(hoverThis).removeClass('active');
  hoverThis.addClass('active');
}).on('mouseleave', function(){
  listActionButton.removeClass('active ');
});

// customize
var buttonRecommendation = $('a.button.recommendation');
var buttonPeople = $('a.button.people');
var recommendationPeople = get("ajax/recommendation-people.json");
var recommendationTopics = get("ajax/recommendation-topics.json");

if($('#recommendation').length){
  $(window).on('load', function(){
    console.log('customized');
    var recommendationPeopleAppend = $('#recommendation-people');
    var recommendationTopicsAppend = $('#recommendation-topics');

    // check if recommendation people appended
    var detectPeopleAppended = $(this).find(recommendationPeopleAppend);
    if(detectPeopleAppended){
      $('#recommendation').children(recommendationPeopleAppend).remove();
      $('#recommendation').removeClass('people').addClass('topics');
      recommendationTopics.then(function(data){
        showRecommendationTopics(data);
      });
    }
    
    buttonRecommendation.on('click', function(e){
      // check if recommendation people appended
      var detectPeopleAppended = $(this).find(recommendationPeopleAppend);
      if(detectPeopleAppended){
        $('#recommendation').children(recommendationPeopleAppend).remove();
        $('#recommendation').removeClass('people').addClass('topics');
        recommendationTopics.then(function(data){
          showRecommendationTopics(data);
        });
      }
    });
    
    buttonPeople.on('click', function(e){
      // check if recommendation topics appended
      var detectPreviousRecommendationTab = $(this).find(recommendationTopicsAppend);
      if(detectPreviousRecommendationTab){
        $('#recommendation').children(recommendationTopicsAppend).remove();
        $('#recommendation').removeClass('topics').addClass('people');
        recommendationPeople.then(function(data){
          showRecommendationPeople(data);
        });
      }
    });
  });
  
  var recommendationContainer = document.getElementById('recommendation');
  
  function showRecommendationPeople(data){
    var recommendationPeople = "";
    for(i=0; i < data.length; i++){
      recommendationPeople +=
      '<li id="recommendation-people"><div class="wrapper clearfix"><a href="'+
      data[i].image+
      '"><img src="'+
      data[i].image+
      '"></a><div class="col"><h2 class="title"><a href="'+
      data[i].urlAuthor+'">'+
      data[i].author+'</a></h2><p>'+
      data[i].description+'</p></div><a href="#" class="button default network '+
      data[i].follow.toLowerCase()+'" data-follow="'+
      data[i].follow.toLowerCase()+'">'+
      data[i].follow+'</a></div></li>'
    }
    recommendationContainer.insertAdjacentHTML('beforeend', recommendationPeople);
  }
  
  function showRecommendationTopics(data){
    var recommendationTopics = "";
    for(i=0; i < data.length; i++){
      recommendationTopics +=
      '<li id="recommendation-topics"><div class="wrapper clearfix"><a href="'+
      data[i].url+
      '"><img src="'+
      data[i].image+
      '"></a><div class="col"><h2 class="title"><a href="'+
      data[i].url+'">'+
      data[i].title+'</a></h2><p>'+
      data[i].description+'</p></div><a href="#" class="button default network '+
      data[i].follow.toLowerCase()+'" data-follow="'+
      data[i].follow.toLowerCase()+'">'+
      data[i].follow+'</a></div></li>'
    }
    recommendationContainer.insertAdjacentHTML('beforeend', recommendationTopics);
  }
}
var closestParent = function (elem, selector) {
	// Element.matches() polyfill
	if (!Element.prototype.matches) {
	    Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function(s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) {}
	            return i > -1;
	        };
	}

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;
};


const createPost = document.querySelector('.create-post');
const mediaGallery = document.querySelector('.gallery');

if(mediaGallery){
  var buttonUpload = '.upload';
  var modalUpload = '.upload';
  modal(buttonUpload, modalUpload);

  var listThumbnail = '.thumbnail';
  var modalGallery = '.gallery';
  modal(listThumbnail, modalGallery);

} else if (createPost){
  var buttonUpload = '.upload';
  var modalUpload = '.create-post';
  modal(buttonUpload, modalUpload);
}

// select media
const thumbnail = document.querySelectorAll('.list li');
// select one
for(let i = 0; i < thumbnail.length; i++){
  thumbnail[i].addEventListener('click', function(e){
    e.preventDefault();
    console.log('selected');
    // console.log(this.getAttribute('data-title'));

    // change preview image by current selected image
    const imagePreview = document.querySelector('.preview img');
    const metaURL = document.querySelector('.meta-url');
    if(imagePreview){
      imagePreview.src = thumbnail[i].getElementsByTagName('img')[0].src;
      // change meta-url by current selected image
      metaURL.value = thumbnail[i].getElementsByTagName('img')[0].src;
    }
    
    // remove .selected if is not selected
    for(let i = 0; i < thumbnail.length; i++){
      thumbnail[i].classList.remove('selected');
      this.classList.add('selected');
    }
  });
}

// const createPost = document.querySelector('.create-post');
// const editCoverButton = document.querySelector('.cover');

// if(createPost){
//   console.log('create post');
//   window.addEventListener('click', function(e){
//     // check if user click upload button
//     if(e.target.closest('.cover')){
//       console.log('di dalam');
//       if(mediaUpload.classList.contains('active')){
//         mediaUpload.classList.remove('active');
//       } else {
//         mediaUpload.classList.add('active');
//       }
//     } else if(e.target.closest('.modal.media')){
//       console.log('di dalam');
//       // close when user hit button close
//       if(e.target.closest('.button.close')){
//         mediaUpload.classList.remove('active');
//       } else {
//         // but do nothing if click inside
//         return;
//       }
//     } else {
//       // destroy everything when user out of the box...
//       console.log('di luar');
//       mediaUpload.classList.remove('active');
//     }
//   });
// }

// if(createPost){
//   modal(editCoverButton);
// }
function modal(button, uniqueClass, callback){
  // first, declare modal container
  const modal = document.querySelector('.modal' + uniqueClass);
  // check if modal exists
  if(modal){
    // console.log('modal');
    // button modal on click
    document.addEventListener('click', function(e){
      // don't forget to remind user using '.button-modal'
      if(e.target.closest('.button-modal' + button)){
        // check if user click button modal
        // console.log('di dalam');
        if(modal.classList.contains('active')){
          modal.classList.remove('active');
        } else {
          modal.classList.add('active');
          callback("active");
        }
      } else if(e.target.closest('.modal')){
        // and also check to closest modal media
        // console.log('di dalam');
        if(e.target.closest('.button.close')){
          // close when user hit button close modal
          modal.classList.remove('active');
        } else {
          // but do nothing if click inside
          return;
        }
      } else {
        // destroy everything when user out of the box...
        // console.log('di luar');
        modal.classList.remove('active');
        callback('deactive');
      }
    });
  }
}
// buttonNavigation navigation
const buttonNavigation = document.querySelectorAll('nav li a.button');
const buttonNavigationActive = document.querySelectorAll('nav li a.button.active');

// find class button on navigation
for(let i = 0; i < buttonNavigation.length; i++){
  buttonNavigation[i].addEventListener('click', function(e){
    e.preventDefault();
    // let this button active then hide the others
    for(let i = 0; i < buttonNavigationActive.length; i++){
      buttonNavigation[i].classList.remove('active');
      this.classList.add('active');
    }
    view();
  });

}
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
  var listArticleForm = $('form#filter-article');
  var listArticleInput = $('form#filter-article input.filter');

  listArticleForm.append(listArticleInput).appendTo(header);
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

function view(){
  const viewGrid = document.querySelector('.icon.view-grid');
  const viewList = document.querySelector('.icon.view-list');
  const parent = closestParent(viewGrid, '.dashboard');

  // check if icon views are exists
  if(viewGrid){
    // Get the parent with the view-grid & view-list class
    if(viewList.classList.contains('active')) {
      parent.classList.remove('view-grid');
      parent.classList.add('view-list');
    } else {
      parent.classList.remove('view-list');
      parent.classList.add('view-grid');
    }
  }
}
// input general
// hide placeholder whenever user is typing
function changePlaceholder(inputDefaultPlaceholder, placeholder){
  // var inputDefaulPlaceholder; 
  $(inputDefaultPlaceholder).on('focus', function(){
    if($(this).val(placeholder)){
      inputDefaultPlaceholder.val('');
      console.log('focus');
    }
  }).on('blur', function(){
    console.log('blur');
    if($(this).val() == ''){
      inputDefaultPlaceholder.val(placeholder);
    }
  })
}

// settings
// profile settings
if($('.settings').length){
  if($('.settings .profile').length){
    // username
    var profileSettingsUsername = $('.settings main .profile input#username');
    var placeholderUsername = profileSettingsUsername.data('username');
    changePlaceholder(profileSettingsUsername, placeholderUsername);
    profileSettingsUsername.val(placeholderUsername);

    // nickname
    var profileSettingsNickname = $('.settings main .profile input#nickname');
    var placeholderNickname = profileSettingsNickname.data('nickname');
    changePlaceholder(profileSettingsNickname, placeholderNickname);
    profileSettingsNickname.val(placeholderNickname);


    // fullname
    var profileSettingsFullname = $('.settings main .profile input#full-name');
    var placeholderFullname = profileSettingsFullname.data('fullname');
    changePlaceholder(profileSettingsFullname, placeholderFullname);
    profileSettingsFullname.val(placeholderFullname);

    // email
    var profileSettingsEmail = $('.settings main .profile input#email');
    var placeholderEmail = profileSettingsEmail.data('email');
    changePlaceholder(profileSettingsEmail, placeholderEmail);
    profileSettingsEmail.val(placeholderEmail);

    // password
    var profileSettingsPassword = $('.settings main .profile input#password');
    var placeholderPassword = profileSettingsPassword.data('password');
    changePlaceholder(profileSettingsPassword, placeholderPassword);
    profileSettingsPassword.val(placeholderPassword);

    var profileSettingsBio = $('.settings main .profile input#bio');
    var placeholderBio = 'Ceritakan tentang Anda'
    changePlaceholder(profileSettingsBio, placeholderBio);
    profileSettingsBio.val(placeholderBio);
    
    var profileSettingsLocation = $('.settings main .profile input#location');
    var placeholderLocation = 'Masukkan lokasi Anda'
    changePlaceholder(profileSettingsLocation, placeholderLocation);
    profileSettingsLocation.val(placeholderLocation);

    var profileSettingsWeb = $('.settings main .profile input#web');
    var placeholderWeb = 'Situs Anda'
    changePlaceholder(profileSettingsWeb, placeholderWeb);
    profileSettingsWeb.val(placeholderWeb);


    function unsaved(){
      var profileTab = $('nav.tabs li');
      profileTab.removeClass('current');
      $('.tab-content').removeClass('current');
      $('.settings .tabs li:nth-child(1)').addClass('current');
      $('.tab-content.profile').addClass('current');
      // console.log('blum save');
      var popupSwitchTab = popup.closest(container).addClass('switch-tab active');
      popup.html('Perubahan Anda belum disimpan, simpan terlebih dahulu');
      // disable popup
      $(document).on('click', function(e){
        if($(e.target).closest(popupSwitchTab).length){
          console.log('di dalam');
          popupSwitchTab.closest(container).removeClass('switch-tab active');
        }
        e.stopPropagation();
        popup.removeClass('active');
      });
    }

    // check if user typing profile settings without saving then do popup
    var isKeypress = false;
    $('input.profile').on('change keyup keydown', function(e){
      // console.log(e.originalEvent.key);
      // check if input triggered and unsaved
      container.addClass('unsaved');
    });

    $('nav li, nav a').on('click', function(){
      if($('.unsaved').length){
        console.log('belum disave');
        unsaved();
      } else {
        console.log('udah disave');
      }
    });

    // click link
    if($('.saved').length){
      container.removeClass('saved');
      $('nav li, nav a').on('click', function(){
        console.log('ada');
        if($('.saved').length){

        }
      });
    }

    $('.settings a.save').on('click', function(e){
      e.stopImmediatePropagation();
      $('#profile').submit();

      container.addClass('saved').removeClass('unsaved');
      popup.html('Saved!');
      setTimeout(function(){
        container.removeClass('saved');
      }, 1000);
    });
  }
  if($('.settings .notification').length){
    var indicatorButton = $('.indicator');
    
    indicatorButton.on('click', function(e){
      e.preventDefault();
      var indicatorButtonThis = $(this);
      // check if indicator is non-active
      if(indicatorButtonThis.attr('data-indicator') == 'non-active'){
        console.log('active');
        indicatorButtonThis.attr('data-indicator', 'active').addClass('active').html('<span>On</span>');
      } else {
        indicatorButtonThis.attr('data-indicator', 'non-active').removeClass('active').html('<span>Off</span>');
      }

      });
  
  }
}
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
  // e.preventDefault();
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
var mediaSlideShow = new Swiper('.modal.media.swiper-container', {
  preventClicks: false,
  paginationClickable: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.modal.media.swiper-container .swiper-button-next',
    prevEl: '.modal.media.swiper-container .swiper-button-prev',
  },
});
// tab
$('.tabs li').on('click', function(e){
  // e.preventDefault();
  e.stopPropagation();
  var tab_id = $(this).attr('data-tab');

  $('.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
  history.pushState(null, null, "#"+tab_id);
});
// toolbar
const toolbarProfileExpand = document.querySelector('.profile-expand');
const toolbarProfile = document.querySelector('.toolbar .profile');

// show profile detail whenever user mouseover their name and photo
toolbarProfile.addEventListener('mouseenter', function(e){
  e.stopImmediatePropagation();
  toolbarProfileExpand.classList.add('active');
});

// hide profile detail whenever user mouseleave profile detail area
toolbarProfileExpand.addEventListener('mouseleave', function(e){
  e.stopImmediatePropagation();
  toolbarProfileExpand.classList.remove('active');
  console.log('profile expand outside area');
});

// hide profile detail wherever user click outside area
window.addEventListener('click', function(e){
  e.stopImmediatePropagation();
  if(e.target.closest('.profile-expand')){
    return
  } else {
    toolbarProfileExpand.classList.remove('active');
  }
});
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