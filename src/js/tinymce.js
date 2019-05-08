tinymce.init({
  selector: '#create-post',
  toolbar: 'file edit insert view format table tools help customPhotoButton customVideoButton',
  setup: function(editor){

    // popup modal media on photo button
    editor.ui.registry.addButton('customPhotoButton', {
      text: 'Foto',
      onAction: function(){
        var modal = document.querySelector('.modal.create-post');
        if(modal.classList.contains('active')){
          modal.classList.remove('active');
        } else {
          modal.classList.add('active');
          if(callback){
            callback("active");
          }
        }
      }
    });
  }
});