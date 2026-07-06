document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMobile = document.querySelector('.nav-mobile');
  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      navMobile.classList.toggle('open');
    });
    navMobile.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => navMobile.classList.remove('open'));
    });
  }

  // Scroll fade-in animation
  const targets = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach((t) => observer.observe(t));
  } else {
    targets.forEach((t) => t.classList.add('visible'));
  }
});
