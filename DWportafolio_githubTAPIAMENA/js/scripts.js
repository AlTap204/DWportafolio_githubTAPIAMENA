document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
    card.addEventListener('touchstart', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('touchend', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
