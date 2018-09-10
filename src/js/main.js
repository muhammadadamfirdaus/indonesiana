/*
==============
JS for - 
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
*/

$(function(){
  // PreLoad
  setTimeout(function removepreload(){
    $('#preload').hide();
    $('.container').css({'visibility':'visible'});
  }, 3000);

  // Go To
  $('a.top[href^="#"]').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  // RESPONSIVE STUFF
  function responsive(){
    window.responsive;
    //$(window).on('resize', function(){
      clearTimeout(window.responsive);
      window.responsive = setTimeout(function(){
        mobile();
      }, 0);
    //});
  }

  menumobile = $('<div id="menu-button" class="menu-mobile"><a href="#">Menu</a></div>');
  menumobileClone = menumobile.clone(true);
  menumobile.remove();

  var recommendationFollow = $('#detail .recommendation');
  
  // recommendationFollow.remove();
  function mobile(){
    var w = $(window).width();
    console.log(w);
    if(w <= 800) {
      console.log('mobile');
      // General Mobile Devices
      /* menu mobile */
      if($('#menu-button').length == 0){
        $('header .col:nth-of-type(3)').prepend(menumobileClone);
      }
      mobileMenu();
      /* end menu mobile */

      var slideMenu = new Swiper('.swiper-container.menu', {
        slidesPerView: 4,
        spaceBetween: 1,
        centeredSlides: true,
        initialSlide: 0,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-menu.swiper-button-next',
          prevEl: '.swiper-menu.swiper-button-prev',
        },
      });

      // check if menu and navigation profile are exists
      if(!$('nav.menu.swiper-container').length){
        $('nav.menu').addClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().addClass('swiper-wrapper').children().addClass('swiper-slide swiper-slide-active');
        $('main.profile .swiper-container.navigation').addClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().addClass('swiper-wrapper').children().addClass('swiper-slide swiper-slide-active');
      }
      
      recommendationFollow.insertAfter('.content .card:nth-child(1)');
    } else {
      // Desktop Begin
      /* menu desktop */
      if($('#menu-button').length){
        resetmobileMenu();
      }

      $('.menu li').hover(function(){
        $(this).find('.sub').stop().slideDown(200);
      }, function(){
        $(this).find('.sub').stop().slideUp(200);
      });
      console.log('desktop');
      $('nav.menu').removeClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().removeClass('swiper-wrapper').children().removeClass('swiper-slide swiper-slide-active');
      // $('.profile .swiper-container.navigation').removeClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().removeClass('swiper-wrapper').children().removeClass('swiper-slide swiper-slide-active');
      // $('.swiper-menu.swiper-button-next, .swiper-menu.swiper-button-prev').hide();
 
      recommendationFollow.appendTo('main.profile .wrapper > *:nth-child(3) > .wrapper');
    }
  }

  mobile();
  $(window).on('load resize', responsive);
  /* end of responsive stuff */

  function resetmobileMenu(){
    $('.menu').removeClass('menu-collapsed menu-expanded');
    menubutton.removeClass('close');
    $('#menu-button').detach();
  }

  function mobileMenu(){
    menubutton = $('.menu-mobile');
    menu = $('.menu');

    if($('.menu-mobile a').filter(function() {
        return $.trim($.text(this)) === 'Close';
      }).length){
      $('.menu-mobile a').html('Menu');
    }

    function menumobileexpand(){
      if(menu.hasClass('menu-expanded')){
        menubutton.removeClass('close');
        removemenumobile();
      } else {
        menubutton.addClass('close');
        menu.addClass('menu-expanded').removeClass('menu-collapsed');
      }

      if($('.close').length){
        $('.menu-mobile a').html('Close');
      } else {
        $('.menu-mobile a').html('Menu');
      }
    }

    function removemenumobile(){
      if($('.menu-collapsed').length){
        menu.removeClass('menu-collapsed');
      } else {
        menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
          $('.sub').css({'display':'none'});
        });
      }
    }

    removemenumobile();

    /* buka menu */
    $('.menu-mobile').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

      menumobileexpand();
      
      /* tutup menu */
      $(document).on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.target.className != 'menu-mobile'){
          removemenumobile();
        }
      });
    });

    /* klik link menunya */
    $('.menu a').off('click').on('click', function(e){
      e.stopImmediatePropagation();
      return true;
    });

    /* expand collapse sub menu */
    $('.has-sub').off('click').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      var submenu = $(this).find('.sub');
      $('.sub').not(submenu).css({'display':'none'});
      submenu.css({'display':'block'});
    });
  }

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  
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

  tooltip.on('mouseleave', function(){
    $('.tooltip-content').remove();
  });

  // tab
  // $(tabNavigation).on('click', function(e){
  //   console.log('register');
  //   e.preventDefault();
  //   e.stopPropagation();
  //   tabs(tabNavigation, tabContent);
  //   // var tab_id = $(this).attr('data-tab');

  //   // $('.tabs li').removeClass('current');
  //   // $('.tab-content').removeClass('current');

  //   // $(this).addClass('current');
  //   // $("#"+tab_id).addClass('current');
  //   // history.pushState(null, null, "#"+tab_id);
  // });

  function tabs(tabNavigation, tabContent){
    var tab_id = $(this).attr('data-tab');

    $(tabNavigation).removeClass('current');
    $(tabContent).removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
    history.pushState(null, null, "#"+tab_id);
  }

  // login navbar
  var toolbarTop = $('.toolbar.user.active');
  var signBox = $('.sign');

  // check if user hasn't logged
  if(!toolbarTop.length){
    console.log('login');
    var loginButtonTop = $('header nav .button.default');
    loginButtonTop.on('click', function(e){
      console.log('popup');
      e.stopImmediatePropagation();
      signBox.addClass('active');
      // click outside signbox
      $(document).on('click', function(e){
        if($(e.target).closest(signBox).length){
          console.log('di dalam');
        } else {
          signBox.removeClass('active');
        }
      });
      var registerButton = $('.popup a.register');
      registerButton.on('click', function(e){
        e.preventDefault();
        $('.content').removeClass('active').next().addClass('active');
      });

      var loginButton = $('.popup a.login');
      loginButton.on('click', function(e){
        e.preventDefault();
        $('.content').removeClass('active').prev().addClass('active');
        console.log('login');
      });
      // $('.sign a').on('click', function(e){
      //   // e.stopImmediatePropagation();
      //   console.log('click');
      //   // return false;
      // });
    });
  } else {
    console.log('logged');
  }

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

  // begin adventure... Trying to become friendship with ajax...
  // wish me luck, avoid to fuckin callback hell. Go to hell yeah!

  // summon eidolons... don't spell any mistake!
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

  
  // first, show user their interest...
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
          var homeUser = get("../src/ajax/index-favorites-"+ counter +".json");
          homeUser.then(function(data){
            indexFavorites(data);
            return get("../src/ajax/index-favorites-2.json");
          }).then(function(data){
            indexFavorites(data);
            return get("../src/ajax/index-favorites-3.json");
          }).then(function(data){
            indexFavorites(data);
            return get("../src/ajax/index-recentpost-1.json");
          }).then(function(data){
            recentPosts(data);
            return get("../src/ajax/index-recentpost-2.json");
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
      profileRequest.open('GET', '../src/ajax/profile-artikel-populer.json');
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
});