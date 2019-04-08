// login navbar
let toolbarTop = document.querySelector('.toolbar.user.active');

if(!toolbarTop){
  let loginButtonTop = '.button.default';
  let signBox = '.sign';

  modal(loginButtonTop, signBox);

  let backButton = document.querySelector('.back');
  let signContent = document.querySelectorAll('.sign .content');
  let signDefault = document.querySelector('#login');
  let signEmailButton = document.querySelector('.email-login');
  let signEmail = document.querySelector('.login-page');
  let signInButton = document.querySelector('a.login');
  let registerButton = document.querySelector('.register');
  let registerEmail = document.querySelector('.registration-email');
  let registerEmailButton = document.querySelector('.email-register');
  let registerPage = document.querySelector('.register-page');
  
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

    // back button for sign in
    signInButton.addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      for(let i = 0; i < signContent.length; i++){
        if(signContent[i].classList.contains('active')){
          signContent[i].classList.remove('active');
          signDefault.classList.add('active');
        }
      }
    });
  });

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

    // back button for sign in
    signInButton.addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      for(let i = 0; i < signContent.length; i++){
        if(signContent[i].classList.contains('active')){
          signContent[i].classList.remove('active');
          signDefault.classList.add('active');
        }
      }
    });
  });
}