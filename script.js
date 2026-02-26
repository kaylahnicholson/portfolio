// Mobile nav menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks && !e.target.closest('.nav-inner')) {
    navLinks.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }
});
