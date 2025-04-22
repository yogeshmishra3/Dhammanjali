
  const present_key = "gallery";
  const cloud_name = "dj5pnjwcr";

  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', present_key);

    fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('preview').src = data.secure_url;

      // Save image URL to localStorage for gallery use
      const storedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
      storedImages.push(data.secure_url);
      localStorage.setItem('galleryImages', JSON.stringify(storedImages));
    })
    .catch(err => console.error(err));
  });

