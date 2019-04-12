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