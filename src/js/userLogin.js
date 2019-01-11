// login navbar
var toolbarTop = $('.toolbar.user.active');
var signBox = $('.sign');

// check if user hasn't logged
if(!toolbarTop.length){
  console.log('login');
  var loginButtonTop = $('header nav .button.default');
  loginButtonTop.on('click', function(e){
    console.log('modal');
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
    var registerButton = $('.modal a.register');
    registerButton.on('click', function(e){
      e.preventDefault();
      $('.content').removeClass('active').next().addClass('active');
    });

    var loginButton = $('.modal a.login');
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