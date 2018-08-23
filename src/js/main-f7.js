/*
==============
JS for - 
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
*/

$(function(){
  var f7 = new Framework7({
    activeState: false,
    clicks: {
      externalLinks: '.external'
    },
    materialRipple: false
  });
  
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
        console.log('oy');
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
    
    var slideMenu = f7.swiper.create('.swiper-container.menu', {
      slidesPerView:  4,
      navigation: {
          nextEl: '.swiper-menu.swiper-button-next',
          prevEl: '.swiper-menu.swiper-button-prev',
        },
    });
    if(w <= 800) {
      console.log('mobile');
      // General Mobile Devices
      /* menu mobile */
      if($('#menu-button').length == 0){
        $('header .col:nth-of-type(3)').prepend(menumobileClone);
      }
      mobileMenu();
      /* end menu mobile */

      // check if menu and navigation profile are exists
      if(!$('nav.menu.swiper-container').length){
        $('nav.menu').addClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().addClass('swiper-wrapper').children().addClass('swiper-slide swiper-slide-active');
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


   $(window).on('load', function(){
    f7.swiper.create('.tabs-swipeable-wrap.swiper-container', {
      // passiveListeners: true
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
      // $('.sign a').on('click', function(e){
      //   // e.stopImmediatePropagation();
      //   console.log('click');
      //   // return false;
      // });
    });
  } else {
    console.log('logged');
  }
  $(window).on('load', function(){
    setTimeout(function(){
      console.log('hi!');
    }, 5000)
  });
});