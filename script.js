// Image Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');

function showImageSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showImageSlides, 5000); // Change image every 5 seconds
}

function changeImageSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showImageSlides();
}

// Text Slideshow
let currentTextSlide = 0;
const texts = document.querySelectorAll('.text');

function showTextSlides() {
    texts.forEach((text, index) => {
        text.classList.toggle('active', index === currentTextSlide);
    });

    currentTextSlide++;
    if (currentTextSlide >= texts.length) {
        currentTextSlide = 0; 
    }

    setTimeout(showTextSlides, 5000); // Change text every 5 seconds
}

// Initialize both slideshows when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    showImageSlides();
    showTextSlides();
});
