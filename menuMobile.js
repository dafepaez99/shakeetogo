  const toggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  toggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    const isOpen = navLinks.classList.contains('active');

    toggle.setAttribute('aria-expanded', isOpen);
  });