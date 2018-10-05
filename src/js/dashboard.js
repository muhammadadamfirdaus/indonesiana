/*
==============
JS for - 
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
*/

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

// sidebar toggle
let sidebarExpander = $('.sidebar').find('.toggle');
sidebarExpander.on('click', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  let sidebar = $('nav.sidebar');
  if( $(this).data('status') == 'clicked' ) {
    $(this).data('status','not_clicked').closest('.dashboard').removeClass('sidebar-hide');
  } else {
    $(this).data('status','clicked').closest('.dashboard').addClass('sidebar-hide');
  }
});

// sidebar submenu
let sidebarMenuList = $('.sidebar .wrapper > li');
sidebarMenuList.on('mouseenter', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  sidebarMenuList.removeClass('active');
  $(this).addClass('active');
});

// accordion
let accordion = $('.accordion');
let accordionButton = accordion.find('.toggle');
accordionButton.on('click', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  console.log('closing accordion');
  if( $(this).data('status') == 'clicked' ) {
    $(this).data('status','not_clicked').closest(accordion).removeClass('accordion-closed');
  } else {
    $(this).data('status','clicked').closest(accordion).addClass('accordion-closed');
  }
});

// popup  

// if create post page only
if($('input#tags').length){
  function autocomplete(inp, arr) {
    /* the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values: */
    var currentFocus;
    /* execute a function when someone writes in the text field: */
    inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /* execute a function when someone clicks in the document: */
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
  }
  
  var tags = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
  // $(window).on('load', function(){
    autocomplete(document.getElementById("tags"), tags);
  // });

  var previewNode = document.querySelector('#preview-image');
  previewNode.id = '';
  var previewTemplate = previewNode.parentNode.innerHTML;
  previewNode.parentNode.removeChild(previewNode);

  var previewCover = document.getElementById('preview-cover');

  var myDropzone = new Dropzone("#text", {
    clickable: '#cover',
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    previewTemplate: previewTemplate,
    previewContainer: previewCover,
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    dictDefaultMessage: '',
    accept: function(file, done) {
      if (file.name == "justinbieber.jpg") {
        done("Naha, you don't.");
      }
      else { done(); }
    },
    url: "https://webtorial.tempo.co/adam/indonesiana/upload.php"
  });
  Dropzone.autoDiscover = false;

  var tags = $('input#tags');
  var tagsValue = tags.val();

  var expression = new RegExp(tagsValue, "i");
  tags.on('keyup', function(){
    console.log('hi');
    $('#result').html('');
    var dataJson;
    $.getJSON('js/data.json', function(data) {
      dataJson = data;
      $.each(dataJson, function(key, value){
       if (value.name.search(expression) != -1 || value.location.search(expression) != -1)
       {
        $('#result').append('<li class="list-group-item link-class">'+value.name+' | <span class="text-muted">'+value.location+'</span></li>');
       }
      });   
     });
  });

  $('#result').on('click', 'li', function() {
    var click_text = $(this).text().split('|');
    $('#search').val($.trim(click_text[0]));
    $("#result").html('');
   });


  if($('.create-post').length){
    // ask to the user whether list or plain article
    let popup = $('.popup');
    let saved = $('.saved');
    // if(!saved){ 
      popup.addClass('active').closest('.dashboard.create-post').addClass('black-transparent');
    // }
    $(document).on('click', function(e){
      if(!$(e.target).closest(popup).length){
        popup.removeClass('active').closest('.dashboard.create-post').removeClass('black-transparent');;
      }
    });
    tinymce.init({
      selector: "#content"
    });
  } else {
    tinymce.remove();
  }


  // article control
  // save button
  var saveButton = $('a.save');
  var publishButton = $('a.publish');
  var saveStatus = $('aside em');
  var indicatorChange = $('.indicator');
  saveButton.on('click', function(e){
    e.preventDefault();
    saveStatus.addClass('active');
  });
  publishButton.on('click', function(e){
    indicatorChange.addClass('green').children().html('Tayang');
  });
}

// tab
$('.tabs li').on('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  var tab_id = $(this).attr('data-tab');

  $('.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
  history.pushState(null, null, "#"+tab_id);
});

if($('.home').length){
  let announcement = new Swiper('.swiper-container.announcement', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    speed: 1000,
    spaceBetween: 30
  });
}

// list article
var listActionButton = $('.dashboard ul li');
listActionButton.on('mouseenter', function(){
  var hoverThis = $(this);
  listActionButton.not(hoverThis).removeClass('active');
  hoverThis.addClass('active');
}).on('mouseleave', function(){
  listActionButton.removeClass('active ');
});

// filter list article
function filterListArticle(header, list){
  jQuery.expr[':'].Contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
  };
  var listArticleForm = $('form#filter-article');
  var listArticleInput = $('form#filter-article .filter');

  listArticleForm.append(listArticleInput).appendTo(header);
  var defaultPlaceholder = ('Cari berdasarkan judul');
  listArticleInput.val(defaultPlaceholder);
  listArticleInput.on('change', function(){
    var filter = $(this).val();
    if(filter){
      $(list).find('li a:not(:Contains('+filter+'))').closest('li').hide();
      $(list).find('li a:Contains('+filter+')').closest('li').show();
    } else {
      $(list).find('li').show();
    }
  }).on('keyup', function(e){
    e.stopPropagation();
    $(this).change();
  }).on('focus', function(){
    console.log('focus');
    if($(this).val()){
      listArticleInput.val('');
    }
  }).on('blur', function(){
    console.log('blur');
    $(list).find('li').show();
    if($(this).val() == ''){
      listArticleInput.val(defaultPlaceholder);
    } else if($(this).val()){
      listArticleInput.val(defaultPlaceholder);
    }
  });
}

$(window).on('load', function(){
  filterListArticle($('#filter-article'), $('#list'));
});

// input general
// hide placeholder whenever user is typing
function changePlaceholder(inputDefaultPlaceholder, placeholder){
  // var inputDefaulPlaceholder; 
  $(inputDefaultPlaceholder).on('focus', function(){
    if($(this).val(placeholder)){
      inputDefaultPlaceholder.val('');
      console.log('focus');
    }
  }).on('blur', function(){
    console.log('blur');
    if($(this).val() == ''){
      inputDefaultPlaceholder.val(placeholder);
    }
  })
}

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

// begin sort
// active article
function published(a, b){
  var statusArticle = $(a).attr('data-status') < $(b).attr('data-status');
  if(statusArticle !== 0){
    return statusArticle
  }
  newest();
}

// draft article
function draft(a, b){
  return ($(a).attr('data-status')) > ($(b).attr('data-status'));    
}

// ascending sort
function asc_sort(a, b){
  return ($(a).attr('data-title')) > ($(b).attr('data-title'));    
}

// descending sort
function des_sort(a, b){
  return ($(a).attr('data-title')) < ($(b).attr('data-title'));    
}

// newest
function newest(a, b){
  return new Date($(a).attr('data-time')) < new Date($(b).attr('data-time'));
}

// oldest
function oldest(a, b){
  return new Date($(a).attr('data-time')) > new Date($(b).attr('data-time'));
}

$('a.published').on('click', function(){
  $('ul.list li').sort(published).appendTo('.list');
  console.log('artikel tayang');
});
$('a.draft').on('click', function(){
  $('ul.list li').sort(draft).appendTo('.list');
  console.log('draft');
});

$('a.ascending').on('click', function(){
  $('ul.list li').sort(asc_sort).appendTo('.list');
  console.log('a ke z');
});

$('a.descending').on('click', function(){
  $('ul.list li').sort(des_sort).appendTo('.list');
  console.log('z ke a');
});

$('a.newest').on('click', function(){
  $('ul.list li').sort(newest).appendTo('.list');
});

$('a.oldest').on('click', function(){
  $('ul.list li').sort(oldest).appendTo('.list');
});
// end sort


// customize
var buttonRecommendation = $('a.button.recommendation');
var buttonPeople = $('a.button.people');
var recommendationPeople = get("ajax/recommendation-people.json");
var recommendationTopics = get("ajax/recommendation-topics.json");

if($('#recommendation').length){
  $(window).on('load', function(){
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

$(document).on('click', '.button.network', function(e){
  if( $(this).data('follow') == 'follow' ) {
    $(this).data('follow','followed');
    console.log('x');
    //your code in case of second click
    $(this).removeClass('follow').addClass('followed').attr('data-follow', 'followed').html('Followed');
  } else {
      $(this).data('follow','follow');
      console.log('y');
      //your code in case of first click
      $(this).addClass('follow').removeClass('followed').attr('data-follow', 'follow').html('Follow');
  }
});

