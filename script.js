const menuToggle = document.getElementById('menu-toggle');
const navLeft = document.querySelector('.nav-links.nav-left');
const navRight = document.querySelector('.nav-links.nav-right');

menuToggle.addEventListener('click', () => {
  navLeft.classList.toggle('active');
  navRight.classList.toggle('active');
});
