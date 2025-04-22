
  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dj5pnjwcr', 
    uploadPreset: 'gallery' 
  }, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
      document.getElementById("uploaded_image").innerHTML =
        `<img src="${result.info.secure_url}" style="width:500px;" />`;
    }
  });

  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
  }, false);

