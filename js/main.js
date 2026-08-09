// RETRO BELLA — Main Site JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Sticky Header Scroll Effect ----------
  const header = document.getElementById('siteHeader');
  if (header) {
    const checkScroll = () => {
      if (!header.classList.contains('on-video')) {
        header.classList.add('scrolled');
      } else {
        header.classList.toggle('scrolled', window.scrollY > 40);
      }
    };
    checkScroll();
    window.addEventListener('scroll', checkScroll);
  }

  // ---------- Mobile Navigation Hamburger Menu ----------
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ---------- Scroll Reveal (IntersectionObserver) ----------
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  }

  // ---------- Custom Interactive Cursor ----------
  const cursorDot = document.getElementById('cursorDot');
  const heroSection = document.querySelector('.hero');
  if (cursorDot && window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      if (heroSection) {
        const overHero = e.clientY < heroSection.getBoundingClientRect().bottom;
        cursorDot.classList.toggle('on-video', overHero);
      }
    });

    const hoverSelectors = '.cat-panel, .newsletter button, .btn-primary, .btn-outline, nav.links a, .sw, .size-row button, .add-cart-btn, .filter-pill, .icon-btn, .lookbook-grid figure';
    document.querySelectorAll(hoverSelectors).forEach(el => {
      el.addEventListener('mouseenter', () => cursorDot.classList.add('active'));
      el.addEventListener('mouseleave', () => cursorDot.classList.remove('active'));
    });
  }
});
