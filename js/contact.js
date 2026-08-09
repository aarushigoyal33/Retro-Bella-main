// RETRO BELLA — Contact Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('contactNote');
  if (form && note) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.classList.add('show');
      form.reset();
      setTimeout(() => note.classList.remove('show'), 4500);
    });
  }
});
