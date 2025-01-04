// Select menu toggle button and hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const hamburgerMenu = document.getElementById('hamburger-menu-links');

// Toggle hamburger menu visibility
menuToggle.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  console.log('Hamburger menu toggled:', hamburgerMenu.classList.contains('active'));
});

// Automatically close hamburger menu on screen resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    if (hamburgerMenu.classList.contains('active')) {
      hamburgerMenu.classList.remove('active');
      console.log('Hamburger menu hidden on resize for larger screens.');
    }
  }
});

// Ensure menu toggle button only appears on smaller screens
window.addEventListener('load', () => {
  if (window.innerWidth > 1024) {
    menuToggle.style.display = 'none';
    hamburgerMenu.classList.remove('active');
  } else {
    menuToggle.style.display = 'block';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    menuToggle.style.display = 'none';
    hamburgerMenu.classList.remove('active');
  } else {
    menuToggle.style.display = 'block';
  }
});
