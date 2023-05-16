const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function changeImage() {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}

setInterval(changeImage, 5000); // cambia de imagen cada 5 segundos
