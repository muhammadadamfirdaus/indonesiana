
// customize
var buttonRecommendation = $('a.button.recommendation');
var buttonPeople = $('a.button.people');
// var recommendationPeople = get("ajax/recommendation-people.json");
// var recommendationTopics = get("ajax/recommendation-topics.json");

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