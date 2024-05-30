const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const autoplayCheckbox = document.querySelector('#autoplay');

let currentSlide = 0;
let autoplayInterval;


function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - n) * 100}%)`;
  });
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}


function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


autoplayCheckbox.addEventListener('change', () => {
  if (autoplayCheckbox.checked) {
    autoplayInterval = setInterval(nextSlide, 3000);
  } else {
    clearInterval(autoplayInterval);
  }
});


showSlide(currentSlide);