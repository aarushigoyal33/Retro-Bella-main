// RETRO BELLA — About Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletterForm');
  const note = document.getElementById('newsletterNote');
  if (form && note) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.classList.add('show');
      form.reset();
      setTimeout(() => note.classList.remove('show'), 4000);
    });
  }
});
