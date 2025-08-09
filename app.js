// Header scroll state
const header = document.getElementById('site-header');
const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 6) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (toggleBtn && mobileMenu) {
  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.classList.toggle('hidden');
  });
}

// Reveal on scroll via IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Contact form demo handler
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (status) status.classList.remove('hidden');
    form.reset();
    setTimeout(() => status && status.classList.add('hidden'), 3500);
  });
}