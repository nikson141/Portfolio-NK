/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.borderBottomColor = window.scrollY > 40
    ? 'rgba(0,255,136,0.3)'
    : 'rgba(0,255,136,0.2)';
});

/* ===== MOBILE MENU ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ===== SMOOTH CLOSE ON OUTSIDE CLICK ===== */
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

/* ===== SCROLL-REVEAL ===== */
const revealEls = document.querySelectorAll(
  '.skill-card, .project-card, .contact-inner'
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeInUp 0.6s ${i * 0.08}s ease both`;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

/* ===== CONTACT FORM ===== */
function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = '// Sending...';
  setTimeout(() => {
    status.textContent = '// Message sent! I\'ll get back to you soon.';
    e.target.reset();
    setTimeout(() => { status.textContent = ''; }, 4000);
  }, 1000);
}

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(l => {
    l.style.color = l.getAttribute('href') === `#${current}`
      ? 'var(--accent)'
      : '';
  });
});
