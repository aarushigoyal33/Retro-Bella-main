// RETRO BELLA — Shop Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.product-card');
  const emptyNote = document.getElementById('emptyNote');

  function applyFilter(cat) {
    let visible = 0;
    cards.forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('is-hidden', !show);
      if (show) visible++;
    });
    if (emptyNote) {
      emptyNote.classList.toggle('show', visible === 0);
    }
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      applyFilter(pill.dataset.filter);
    });
  });

  // Deep-link via hash, e.g. shop.html#bags
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const match = document.querySelector(`.filter-pill[data-filter="${hash}"]`);
    if (match) match.click();
  }

  // Add to Cart Feedback
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const original = btn.textContent;
      btn.textContent = 'Added ✓';
      setTimeout(() => { btn.textContent = original; }, 1500);
    });
  });
});
