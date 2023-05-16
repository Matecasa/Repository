
        
        const carouselImages = document.getElementById('carousel-images');
        let imageIndex = 0;
        const images = document.getElementsByClassName('carousel-image');
        
        function showImage(index) {
            carouselImages.style.transform = `translateX(-${index * 100}%)`;
        }
        
        function nextImage() {
            imageIndex++;
            if (imageIndex === images.length) {
                imageIndex = 0;
            }
            showImage(imageIndex);
        }
        
        setInterval(nextImage, 2000); // Cambia la imagen cada 2 segundos
    