const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
function showSlide(index) {
    if (index < 0) {
        currentIndex = slide.length - 1;
    } else if (index >= slide.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    updateDots();
}
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});
nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
    });
});
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3500);
showSlide(currentIndex);