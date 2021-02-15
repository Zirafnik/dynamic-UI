const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotsNav= document.querySelector('.carousel-nav');
const dots= Array.from(dotsNav.children);

const slideWidth= slides[0].getBoundingClientRect().width;


slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove= nextSlide.style.left;

    track.style.transform = 'translateX(' + amountToMove + ')';
})

//unfinished
