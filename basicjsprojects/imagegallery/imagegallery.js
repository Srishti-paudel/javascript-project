const images = [
    "image1.jpg", 
    "image2.jpg", 
    "image3.jpg", 
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
  ];
  
  let currentImageIndex = 0;
  
  function changeImage(direction) {
    currentImageIndex += direction;
  
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1; // Go to last image
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0; 
    }
  
    document.getElementById('gallery-image').src = images[currentImageIndex];
  }
  