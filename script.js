let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');

function showImageSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function autoSlideShow() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showImageSlides();
    setTimeout(autoSlideShow, 5000); 
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

    setTimeout(showTextSlides, 5000); 
}


document.addEventListener('DOMContentLoaded', (event) => {
    showImageSlides();
    autoSlideShow();
    showTextSlides();
});


document.querySelector('.prev').addEventListener('click', () => {
    changeImageSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    changeImageSlide(1);
});
