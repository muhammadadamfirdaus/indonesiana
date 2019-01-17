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
