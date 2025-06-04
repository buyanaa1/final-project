  const navLinks = document.querySelectorAll('.contents a');
  const sections = document.querySelectorAll('.article h2[id]');

  // 2. Scroll хийхэд автоматаар идэвхжих
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });