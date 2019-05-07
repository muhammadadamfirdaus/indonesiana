tinymce.init({
  selector: '#create-post',
  toolbar: 'file edit insert view format table tools help customPhotoButton',
  setup: function(editor){
    editor.ui.registry.addButton('customPhotoButton', {
      text: 'Foto',
      onAction: function(){
        console.log('hit');
        var buttonUpload = '.upload';
        var modalUpload = '.create-post';
        modal(buttonUpload, modalUpload);
        // editor.insertContent('&nbsp;<strong>It\'s my button!</strong>&nbsp;');
      }
    });
  //   editor.on('ExecCommand',function(buttonUpload, modalupload){
  //     modal(buttonUpload, modalup);     
  //  })
  }
});