// get current scroll
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

// function get(url){
//   return new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onload = function(){
//       if(xhr.status == 200){
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(xhr.statusText);
//       }
//     }
//     xhr.onerror = function(){
//       reject(xhr.statusText);
//     }
//     xhr.send();
//   });
// }
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
          if(callback){
            callback("active");
          }
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
        if(callback){
          callback("deactive");
        }
      }
    });
  }
}
if($('#new-request').length){

  // index
  // load interest topic first, then latest
  let counter = 1;
  var $element = $('main');
  $(window).data('ajaxready', true).on('scroll', function(){
    // check if <main> home has reached bottom
    if($element.length){
      if($(window).data('ajaxready') == false) return;

      var scroll = $(window).scrollTop() + $(window).height();
      var offset = $element.offset().top + $element.height();
      if (scroll > offset) {
        //  console.log('bottom');
        $(window).data('ajaxready', false);
        var homeUser = get("ajax/index-favorites-"+ counter +".json");
        homeUser.then(function(data){
          indexFavorites(data);
          return get("ajax/index-favorites-2.json");
        }).then(function(data){
          indexFavorites(data);
          return get("ajax/index-favorites-3.json");
        }).then(function(data){
          indexFavorites(data);
          return get("ajax/index-recentpost-1.json");
        }).then(function(data){
          recentPosts(data);
          return get("ajax/index-recentpost-2.json");
        }).then(function(data){
          recentPosts(data)
        });
      }
    }
  });
  let indexFavoritesRendered = document.getElementById('new-request');
  function indexFavorites(data){
    var render = "";
    for(i = 0; i < data.length; i++){
        render += '<section id="update" class="feed type-4"><div class="wrapper"><div class="title"><a href="'+
        data[i].urlCategory+'">'+
        data[i].category+'</a><a class="more" href="'+
        data[i].urlCategory+'">Selengkapnya</a></div><div class="wrapper clearfix">'
        for(i = 0; i < data.length; i++){
          render += '<div class="col w-25"><div class="card"><div class="wrapper"><span class="date">'+
          data[i].date+'</span><h3><a href="'+
          data[i].urlAuthor+'"></a></h3><a href="'+
          data[i].image+'"><img src="'+
          data[i].image+'" alt="'+
          data[i].imageCaption+'"></a><h1><a href="'+
          data[i].urlArticle+'">'+
          data[i].title+'</a></h1><p><a href="'+
          data[i].title+'">'+
          data[i].description+'</a></p></div></div></div>'
        }
        '</div></div></section>'
      }

    indexFavoritesRendered.insertAdjacentHTML('beforeend', render);
  }

  // then adding extra tags for recent post
  if($('#new-request').find("#update")){
    $('#new-request').after(`<section class="feed type-2">
    <div class="wrapper clearfix">
      <div class="col w-40 sidebar">
        <div class="wrapper">
          <!-- <div class="title">
            <a href="">
              Populer
            </a>
            <a class="more" href="">
              Selengkapnya
            </a>
          </div> -->
          <div class="wrapper">
          </div>
        </div>
      </div>
      <div class="col w-60 thumbnail-lg">
        <div class="wrapper">
          <div class="title">
            <a href="">
              Terakhir
            </a>
            <a class="more" href="">
              Selengkapnya
            </a>
          </div>
          <div id="recent" class="wrapper">
          </div>
        </div>
      </div>
    </div>
  </section>`);
  }

  // recent post begin as long as they want...
  let indexRecentRendered = document.getElementById('recent');
  function recentPosts(data) {
    var render = "";
    for(i = 0; i < data.length; i++){
      render += '<div class="card"><div class="wrapper clearfix"><span class="date">'+
      data[i].date+'</span><h3><a href="'+
      data[i].urlAuthor+'">'+
      data[i].author+'</a></h3><a href="'+
      data[i].image+'"><img class="image-center" src="'+
      data[i].image+'" alt="'+
      data[i].imageCaption+'"></a><h1><a href="'+
      data[i].urlArticle+'">'+
      data[i].title+'</a></h1></div></div>'
    }

    indexRecentRendered.insertAdjacentHTML('beforeend', render);
  }
  // end, enough for home today. Let's jump in to the next page. Shall we?
}

// get data profile article list
if($('#profile-list-article').length){
  var profileListPopuler = document.getElementById('profile-list-article');
  window.onload = function(){
    getDataProfileArticle();
  }
  function getDataProfileArticle(){
    var profileRequest = new XMLHttpRequest();
    profileRequest.open('GET', 'ajax/profile-artikel-populer.json');
    profileRequest.onload = function(){
      var dataprofile = JSON.parse(profileRequest.responseText);
      console.log(dataprofile);
      profileArticlePopuler(dataprofile);
    }
    profileRequest.send();
  }
  function profileArticlePopuler(datanya){
    var profileArticlePopulerRender = "";
    for(i = 0; i < datanya.length; i++){
      profileArticlePopulerRender += '<div class="card"><div class="wrapper"><span class="date">' + datanya[i].date + '</span><a href=""><img src='+ datanya[i].image +' /></a><h1><a href="">' + datanya[i].title + '</a></h1><p><a href="">' + datanya[i].description + '</a></p></div></div>'
      // profileArticlePopulerRender += data[i].date
    }

    profileListPopuler.insertAdjacentHTML('beforeend', profileArticlePopulerRender);
    console.log('profileArticlePopulerRender');
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
const createTagDiv = document.createElement('div');
const createTagA = document.createElement('a');
const createTagSpan = document.createElement('span');

// create extra button for menu
const menu = document.querySelector('.menu');
createTagDiv.className = 'menu-mobile';
const extraButton = menu.before(createTagDiv); // place before .menu
const menuButton =
// extraButton.appendChild(createTagA);
createTagDiv.appendChild(createTagSpan);

// menu mobile button
const menuMobile = document.querySelector('.menu-mobile');
menuMobile.addEventListener('click', () => {
  // check if menu has class active before then show menu
  if(menuMobile.classList.contains('close')){
    menuMobile.classList.remove('close');
    menu.classList.remove('active');
  } else {
    menuMobile.classList.add('close');
    menu.classList.add('active');
  }

  // window.addEventListener('click', (e) => {
  //   e.stopImmediatePropagation();
  //   // check if user click outside menu area
  //   if((menu != e.target) && (menuMobile != e.target)){
  //     menuMobile.classList.remove('close');
  //     menu.classList.remove('active');
  //     console.log('hi');
  //   }
  // });
});
// end menu mobile

// responsive
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log('screen width: ', screenWidth);

// submenu
// const submenu = document.querySelectorAll('.menu .sub');
// for(let i = 0; i < submenu.length; i++){
//   submenu[i].addEventListener('mouseenter', function(e){
//     e.stopImmediatePropagation();
//     this.classList.add('active');
//   });
//   submenu[i].addEventListener('mouseout', function(e){
//     e.stopImmediatePropagation();
//     if(submenu[i].classList.contains('active')){
//       submenu[i].classList.remove('active');
//     } else {
//       submenu[i].classList.remove('active');
//     }
//   });
// }
// end submenu

let resizeTimeout;
// window.addEventListener('resize', () => {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(function(){
//     window.location.reload();
//   }, 0);
//   if(screenWidth > 800){
//     console.log('desktop');
//   } else {
//     console.log('mobile');
//   }
// });
$(document).on('click', '.button.network', function(e){
  // e.preventDefault();
  if( $(this).data('follow') == 'follow' ) {
    $(this).data('follow','followed');
    $(this).removeClass('follow').addClass('followed').attr('data-follow', 'followed').html('Followed');
  } else {
    $(this).data('follow','follow');
    $(this).addClass('follow').removeClass('followed').attr('data-follow', 'follow').html('Follow');
  }
});
// login navbar
let toolbarTop = document.querySelector('.toolbar.user.active');

if(!toolbarTop){
  let loginButtonTop = '.button.default';
  let signBox = '.sign';
  
  let backButton = document.querySelector('.back');
  let signContent = document.querySelectorAll('.sign .content');
  let signDefault = document.querySelector('#login');
  let signEmailButton = document.querySelector('.email-login');
  let signEmail = document.querySelector('.login-page');
  let signInButton = document.querySelectorAll('a.login');
  let registerButton = document.querySelector('.register');
  let registerEmail = document.querySelector('.registration-email');
  let registerEmailButton = document.querySelector('.email-register');
  let registerPage = document.querySelector('.register-page');

  // var promise1 = new Promise(function() {
  //   modal(loginButtonTop, signBox);
  // });
  
  // promise1.then(function(value) {
  //   console.log(value);
  //   // expected output: "foo"
  // });

  modal(loginButtonTop, signBox, function(e){
    console.log(e);
    if(e == 'active'){
      signDefault.classList.add('active');
    } else if(e == 'deactive') {
      for(let i = 0; i < signContent.length; i++){
        // remove for all content if contains any active classes
        signContent[i].classList.remove('active');
      }
    }
  });

  // first create post button
  signEmailButton.addEventListener('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    // then popup default login page
    for(let i = 0; i < signContent.length; i++){
      // remove for all content if contains any active classes
      if(signContent[i].classList.contains('active')){
        signContent[i].classList.remove('active');
        signEmail.classList.add('active');
      } else {
        signEmail.classList.add('active');
      }
    }

    // back button
    backButton.addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      signEmail.classList.remove('active');
      signDefault.classList.add('active');
    });
  });

  // register button bottom to show register page
  registerButton.addEventListener('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    for(let i = 0; i < signContent.length; i++){
      if(signContent[i].classList.contains('active')){
        signContent[i].classList.remove('active');
        registerPage.classList.add('active');
      }
    }
  });

  // back button for sign in
  for(let i = 0; i < signInButton.length; i++){
    signInButton[i].addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      
      for(let j = 0; j < signContent.length; j++){
        if(signContent[j].classList.contains('active')){
          signContent[j].classList.remove('active');
          signDefault.classList.add('active');
        }
      }
    });
  }

  // registration email button
  registerEmailButton.addEventListener('click', function(e){
    e.stopImmediatePropagation();
    registerEmail.classList.add('active');
    for(let i = 0; i < signContent.length; i++){
      if(signContent[i].classList.contains('active')){
        signContent[i].classList.remove('active');
        registerEmail.classList.add('active');
      }
    }
  });
}