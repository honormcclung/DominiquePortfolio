// Select the hamburger menu toggle button
const menuToggle = document.getElementById('menu-toggle');

// Select the dropdown menu for the hamburger navigation
const hamburgerMenu = document.getElementById('hamburger-menu-links');

// Add event listener to toggle the hamburger menu visibility
menuToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the hamburger menu
  hamburgerMenu.classList.toggle('active');
});
