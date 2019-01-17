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