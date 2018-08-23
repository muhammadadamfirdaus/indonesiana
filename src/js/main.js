/*
==============
JS for - 
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
*/

$(function(){
  console.log('goals');
  // PreLoad
  setTimeout(function removepreload(){
    $('#preload').hide();
    $('.container').css({'visibility':'visible'});
  }, 3000);

  // Go To
  $('a.top[href^="#"]').click(function() {
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
    return false;
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

  function mobile(){
    var w = $(window).width();
    console.log(w);
    if(w <= 800) {
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
      // $('.swiper-menu.swiper-button-next, .swiper-menu.swiper-button-prev').show();

      if($('#detail').length){
        var profileNavigation = new Swiper('main.profile .swiper-container.navigation', {
          slidesPerView: 2,
          spaceBetween: 1,
          centeredSlides: true,
          slideToClickedSlide: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-profile.swiper-button-next',
            prevEl: '.swiper-profile.swiper-button-prev',
          },
        });

        var profileContent = new Swiper('main.profile .swiper-container.content', {
          slidesPerView: 1
        });

        profileNavigation.controller.control = profileContent;
        profileContent.controller.control = profileNavigation;
      }

      // check if menu and navigation profile are exists
      if(!$('nav.menu.swiper-container').length){
        $('nav.menu').addClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().addClass('swiper-wrapper').children().addClass('swiper-slide swiper-slide-active');
        $('main.profile .swiper-container.navigation').addClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().addClass('swiper-wrapper').children().addClass('swiper-slide swiper-slide-active');
      }
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

      $('nav.menu').removeClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().removeClass('swiper-wrapper').children().removeClass('swiper-slide swiper-slide-active');
      // $('.profile .swiper-container.navigation').removeClass('swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android').children().removeClass('swiper-wrapper').children().removeClass('swiper-slide swiper-slide-active');
      // $('.swiper-menu.swiper-button-next, .swiper-menu.swiper-button-prev').hide();
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

  if($('#detail').length){
    $('.cover img').each(function() {
      var off = $(this).offset().top
      $(this).data('orig-offset', off);
    });
    $(window).scroll(function(){
        var scrollTop = getCurrentScroll();
  
        $('.cover img').each(function(){
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
  }



});