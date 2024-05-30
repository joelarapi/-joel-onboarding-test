const burgerIcon = document.querySelector('.burger-res');
const closeIcon = document.querySelector('.close-icon');
const menu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
  menu.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('active');
});