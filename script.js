let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const texts = document.querySelectorAll('.text');
const listItems = document.querySelectorAll('.animated-list li');
const whatHeading = document.querySelector('.what');
const workItems = document.querySelectorAll('.work');

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

function showTextSlides() {
    texts.forEach((text, index) => {
        text.classList.toggle('active', index === slideIndex);
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVisibility() {
    listItems.forEach((item) => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
    if (isElementInViewport(whatHeading)) {
        whatHeading.classList.add('visible');
    }
    workItems.forEach((item) => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showImageSlides();
    autoSlideShow();
    showTextSlides();
    checkVisibility();
});

document.querySelector('.prev').addEventListener('click', () => {
    changeImageSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    changeImageSlide(1);
});

document.querySelector('.search-icon').addEventListener('click', (e) => {
    e.preventDefault();
    const searchForm = document.querySelector('.search-form');
    if (searchForm.style.display === 'block') {
        searchForm.style.display = 'none';
    } else {
        searchForm.style.display = 'block';
    }
});

// Optional: Close the form if clicking outside of it
document.addEventListener('click', (e) => {
    const searchForm = document.querySelector('.search-form');
    if (!searchForm.contains(e.target) && !e.target.matches('.search-icon, .search-icon *')) {
        searchForm.style.display = 'none';
    }
});

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
