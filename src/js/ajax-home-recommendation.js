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
